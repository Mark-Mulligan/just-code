export const calculateTheTipSolution = `const tipCalc = (mealPrice, tipPercent) => {
  let mealPriceAsNum = Number(mealPrice.slice(1));
  let percentTipAsDecimal = Number(tipPercent.slice(0, -1)) / 100;
  let tipCostAsNum = Math.round((mealPriceAsNum * percentTipAsDecimal) * 100) / 100;

  return \`$\${tipCostAsNum.toFixed(2)}\`;
}`;
