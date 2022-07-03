import { createMocks, RequestMethod } from 'node-mocks-http';
import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../../../pages/api/testcode/[testname]';
import { sumTwoIntSolution } from '../../../../data/solutions/sumTwoInt';

describe('/api/testcode/[testname] API Endpoint', () => {
  function mockRequestResponse(method: RequestMethod = 'POST') {
    const { req, res }: { req: NextApiRequest; res: NextApiResponse } = createMocks({ method });
    req.headers = {
      'Content-Type': 'application/json',
    };
    req.query = { testname: 'sum-two-ints' };
    req.body = { userCode: sumTwoIntSolution };
    return { req, res };
  }

  it('should return a successful response', async () => {
    const { req, res } = mockRequestResponse();
    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });
});
