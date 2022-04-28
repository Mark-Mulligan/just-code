import type { NextApiRequest, NextApiResponse } from 'next';
// import fs from 'fs';
import { VM } from 'vm2';
import { TestResult } from '../../../types';
import { codingExercisesData } from '../../../data/codingExercisesData';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const vm = new VM({ timeout: 1000, sandbox: {} });
  const testname = req.query.testname as string;

  if (req.method === 'POST') {
    const { userCode } = req.body;

    // get test script to add to user input
    let testScriptCode = codingExercisesData[testname].testScriptCode;
    let testResults = [] as TestResult[];

    // for developer de-bugging purposes
    // Don't remove but also don't push to prod.  It will break in prod environment
    //fs.writeFileSync(`data/${testname}.js`, `${userCode}\n${testScriptCode}`);

    try {
      testResults = vm.run(`${userCode}\n${testScriptCode}`);
    } catch (err: any) {
      res.status(400).json({ message: `${err.message}. Code failed to compile.` });
      return;
    }

    let numTestsPassed = 0;
    testResults.forEach((test) => {
      if (test.passed === true) {
        numTestsPassed++;
      }
    });

    const overallResult = testResults.length === numTestsPassed ? 'passed' : 'failed';

    res.status(200).json({ testResults, numTestsPassed, overallResult });
  }
};

export default handler;
