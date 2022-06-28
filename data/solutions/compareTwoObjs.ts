export const compareTwoObjsSolution = `const compareObjs = (obj1, obj2) => {
  // https://www.30secondsofcode.org/js/s/equals
  // comparing two objects true is a lot of work. This code handles a deep compare of two objects
  // even though a simpler version would work for these test cases
  
  if (obj1 === obj2) return true;
  if (obj1 instanceof Date && obj2 instanceof Date)
    return obj1.getTime() === obj2.getTime();
  if (!obj1 || !obj2 || (typeof obj1 !== 'object' && typeof obj2 !== 'object'))
    return obj1 === obj2;
  if (obj1.prototype !== obj2.prototype) return false;
  const keys = Object.keys(obj1);
  if (keys.length !== Object.keys(obj2).length) return false;
  return keys.every(k => compareObjs(obj1[k], obj2[k]));
}`;
