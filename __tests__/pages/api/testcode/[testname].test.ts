import handler from '../../../../pages/api/testcode/[testname]';
import { sumTwoIntSolution } from '../../../../data/solutions/sumTwoInt';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRequest, createResponse, RequestOptions } from 'node-mocks-http';
import { TestResult } from '../../../../types';
import { codingExercisesData } from '../../../../data/codingExercisesData';

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type APiResponse = NextApiResponse & ReturnType<typeof createResponse>;

describe.each(Object.keys(codingExercisesData))(`/api/testcode/[%s] API Endpoint`, (dataKey) => {
  const mockRequestResponse = (options: RequestOptions) => {
    const req = createRequest<ApiRequest>(options);
    const res = createResponse<APiResponse>();
    return { req, res };
  };

  it('should return a successful response', async () => {
    const { req, res } = mockRequestResponse({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      query: { testname: dataKey },
      body: { userCode: codingExercisesData[dataKey].solutionCode },
    });
    await handler(req, res);

    expect(res.statusCode).toBe(200);
  });

  it('provided solution should pass all tests for challenge', async () => {
    const { req, res } = mockRequestResponse({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      query: { testname: dataKey },
      body: { userCode: codingExercisesData[dataKey].solutionCode },
    });
    await handler(req, res);

    const data = res._getJSONData();
    expect(data).toHaveProperty('testResults');

    data.testResults.forEach((testResult: TestResult) => {
      expect(testResult.passed).toBe(true);
    });
  });
});
