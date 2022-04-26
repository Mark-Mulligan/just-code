import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

export type CodingExerciseOverview = {
  title: string;
  description: string;
  instructions: string;
  testScriptCode: string;
  startingCode: string;
  testCriteria: string[];
  problemExplaination?: string;
  hints?: string[];
  solutionCode?: string;
};

export type AllExerciseOverviewData = {
  [key: string]: CodingExerciseOverview;
};

export type TestResult = {
  test: string;
  passed: boolean;
  result: any;
};

export interface IParams extends NextParsedUrlQuery {
  problemKey: string;
}

export type TestcodeRouteResponse = {
  status: number;
  data: {
    testResults: TestResult[];
    numTestsPassed: number;
    numTestsFailed: number;
    overallResult: string;
  };
};

export type CodingExerciseStaticPath = {
  params: {
    problemKey: string;
  };
};

export interface CodingExerciseData {
  [key: string]: CodingExerciseOverview;
}
