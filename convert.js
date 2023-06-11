const RATES = {
  usd: 36.88,
  eur: 39.68,
};

function convert(hrn, currency) {
  if(!RATES[currency]) {
    return hrn;
  }
  return hrn * RATES[currency];
}