export const deepEqual = (obj1: { [key: string]: any }, obj2: { [key: string]: any }) => {
  if (obj1 === obj2) return true;

  if (isPrimitive(obj1) && isPrimitive(obj2)) return obj1 === obj2;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
};

function isPrimitive(obj: { [key: string]: any }) {
  return obj !== Object(obj);
}

export function object_equals(x: any, y: any) {
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
}

export const largestSumReturnTypeCheck = (largestSumResult: { largestSum: number; indexes: number[] }) => {
  if (typeof largestSumResult !== 'object') {
    return false;
  }

  if (Object.keys(largestSumResult).length !== 2) {
    return false;
  }

  if (!largestSumResult.hasOwnProperty('largestSum') || !largestSumResult.hasOwnProperty('indexes')) {
    return false;
  }

  if (
    typeof largestSumResult['largestSum'] !== 'number' ||
    !Array.isArray(largestSumResult['indexes']) ||
    largestSumResult['indexes'].length !== 2
  ) {
    return false;
  }

  if (typeof largestSumResult['indexes'][0] !== 'number' || typeof largestSumResult['indexes'][1] !== 'number') {
    return false;
  }

  return true;
};
