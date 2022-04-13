import { createTestScriptString } from '../../../utils/testScripts';

interface Name {
  first: string;
  last: string;
}

const alphabetizeNames = (nameList: Name[], order: string) => {
  return '';
};

const checkFunctionReturnsAListOfNames = (functionResult: any) => {
  if (!Array.isArray(functionResult)) return false;

  functionResult.forEach((name) => {
    if (!name.hasOwnProperty('first') || !name.hasOwnProperty('last')) return false;
    if (typeof name.first !== 'string' || typeof name.last !== 'string') return false;
  });
};

const object_equals = (x: any, y: any) => {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (typeof x[p] !== 'object') return false;
    if (!object_equals(x[p], y[p])) return false;
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;

  return true;
};

const alphabetizeNamesTests = () => {
  const testResults = [];
  testResults.push({
    test: 'User created a function alphabetizeNames.',
    passed: typeof alphabetizeNames === 'function',
    result: typeof alphabetizeNames,
  });
  testResults.push({
    test: 'Function an array of name objects',
    passed: checkFunctionReturnsAListOfNames(
      alphabetizeNames(
        [
          { first: 'Harry', last: 'Potter' },
          { first: 'Ron', last: 'Weasly' },
          { first: 'Draco', last: 'Malfoy' },
        ],
        'last',
      ),
    ),

    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'Harry', last: 'Potter' },
          { first: 'Ron', last: 'Weasly' },
          { first: 'Draco', last: 'Malfoy' },
        ],
        'last',
      ),
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'Harry', last: 'Potter' },
        { first: 'Ron', last: 'Weasly' },
        { first: 'Draco', last: 'Malfoy' },
      ],
      'last',
    ), returns [
      { first: 'Draco', last: 'Malfoy'}, 
      { first: 'Harry', last: 'Potter' }, 
      { first: 'Ron', last: 'Weasly' }
    ]`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: 'Harry', last: 'Potter' },
            { first: 'Ron', last: 'Weasly' },
            { first: 'Draco', last: 'Malfoy' },
          ],
          'last',
        ),
      ) ===
      JSON.stringify([
        { first: 'Draco', last: 'Malfoy' },
        { first: 'Harry', last: 'Potter' },
        { first: 'Ron', last: 'Weasly' },
      ]),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'Harry', last: 'Potter' },
          { first: 'Ron', last: 'Weasly' },
          { first: 'Draco', last: 'Malfoy' },
        ],
        'last',
      ),
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'Michael', last: 'Scott' },
        { first: 'Pam', last: 'Beasly' },
        { first: 'Dwight', last: 'Schrute' },
        { first: 'Jim', last: 'Halpert' },
      ],
      'first',
    ), returns [
      { first: 'Dwight', last: 'Schrute' },
      { first: 'Jim', last: 'Halpert' },
      { first: 'Michael', last: 'Scott' },
      { first: 'Pam', last: 'Beasly' },
    ],`,
    passed:
      JSON.stringify(
        alphabetizeNames(
          [
            { first: 'Michael', last: 'Scott' },
            { first: 'Pam', last: 'Beasly' },
            { first: 'Dwight', last: 'Schrute' },
            { first: 'Jim', last: 'Halpert' },
          ],
          'first',
        ),
      ) ===
      JSON.stringify([
        { first: 'Dwight', last: 'Schrute' },
        { first: 'Jim', last: 'Halpert' },
        { first: 'Michael', last: 'Scott' },
        { first: 'Pam', last: 'Beasly' },
      ]),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'Dwight', last: 'Schrute' },
          { first: 'Jim', last: 'Halpert' },
          { first: 'Michael', last: 'Scott' },
          { first: 'Pam', last: 'Beasly' },
        ],
        'first',
      ),
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'John', last: 'Smith' },
        { first: 'Jane', last: 'Smith' },
        { first: 'Other', last: 'Name' },
        { first: 'Another', last: 'Name' },
      ],
      'last',
    ), returns [
      { first: 'Another', last: 'Name' },
      { first: 'Other', last: 'Name' },
      { first: 'Jane', last: 'Smith' },
      { first: 'John', last: 'Smith' },
    ],`,
    passed: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'John', last: 'Smith' },
          { first: 'Jane', last: 'Smith' },
          { first: 'Other', last: 'Name' },
          { first: 'Another', last: 'Name' },
        ],
        'last',
      ) ===
        JSON.stringify([
          { first: 'Another', last: 'Name' },
          { first: 'Other', last: 'Name' },
          { first: 'Jane', last: 'Smith' },
          { first: 'John', last: 'Smith' },
        ]),
    ),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'John', last: 'Smith' },
          { first: 'Jane', last: 'Smith' },
          { first: 'Other', last: 'Name' },
          { first: 'Another', last: 'Name' },
        ],
        'last',
      ),
    ),
  });
  testResults.push({
    test: `alphabetizeNames(
      [
        { first: 'John', last: 'Stewart' },
        { first: 'John', last: 'Stamos' },
        { first: 'Chris', last: 'Evans' },
        { first: 'Chris', last: 'Stapleton' },
      ],
      'last',
    ), returns [
      { first: 'Chris', last: 'Evans' },
      { first: 'Chris', last: 'Stapleton' },
      { first: 'John', last: 'Stamos' },
      { first: 'John', last: 'Stewart' },
    ],`,
    passed: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'John', last: 'Stewart' },
          { first: 'John', last: 'Stamos' },
          { first: 'Chris', last: 'Evans' },
          { first: 'Chris', last: 'Stapleton' },
        ],
        'first',
      ) ===
        JSON.stringify([
          { first: 'Chris', last: 'Evans' },
          { first: 'Chris', last: 'Stapleton' },
          { first: 'John', last: 'Stamos' },
          { first: 'John', last: 'Stewart' },
        ]),
    ),
    result: JSON.stringify(
      alphabetizeNames(
        [
          { first: 'John', last: 'Stewart' },
          { first: 'John', last: 'Stamos' },
          { first: 'Chris', last: 'Evans' },
          { first: 'Chris', last: 'Stapleton' },
        ],
        'first',
      ),
    ),
  });

  return testResults;
};

export const alphabetizeNamesTestScript = createTestScriptString(alphabetizeNamesTests);
