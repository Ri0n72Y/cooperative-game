interface RowCalculation {
  price: number;
  rent: number;
  t1: number;
  t2: number;
  t3: number;
  cost?: number;
  token?: number;
  round?: boolean;
}

export function getRow({
  price,
  rent = 0.06,
  t1,
  t2,
  t3,
  cost,
  token,
  round = true,
}: RowCalculation) {
  const r = (x: number) => (round ? Math.round(x / 10) * 10 : x);
  const time1 = r(price * t1);
  const time2 = r(price * t2);
  const time3 = r(price * t3);
  const rentPrice = r(price * rent);
  const tokenCost = r(price * (cost ?? 0));
  const tokenPrice = r(price * (token ?? 0));
  return {
    price,
    rent: rentPrice,
    income: `${time1} | ${time1 + time2} | ${time1 + time2 + time3}`,
    "income-rate": ((time1 + time2 + time3 - rentPrice) / price).toFixed(3),
    "local-salary": `${time1 - rentPrice} | ${time1 + time2 - rentPrice} | ${
      time1 + time2 + time3 - rentPrice
    }`,
    "token-salary": r((time1 + time2) / 2),
    ...(cost !== undefined ? { "token-cost": tokenCost } : {}),
    ...(token !== undefined ? { "token-price": tokenPrice } : {}),
  };
}
