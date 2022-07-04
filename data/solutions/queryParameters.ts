export const queryParametersSolution = `const extractQueryParams = (urlStr) => {
  // Extract the query string from the url
  let queryParamsRegex = ${/\?.*/}
  let queryParamsStr = urlStr.match(queryParamsRegex)[0].slice(1);

  // Split the query string into key values gropuings
  let queryParamsArr = queryParamsStr.split("&");
  let result = {};

  // Format the single string key value groupings into an object
  queryParamsArr.forEach(queryParamGrouping => {
    let grouping = queryParamGrouping.split("=");
    result[grouping[0]] = grouping[1];
  })

  return result;
}`;
