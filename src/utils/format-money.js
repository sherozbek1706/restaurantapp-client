export const formatMoney = (amount) => {
  const formatter = new Intl.NumberFormat("uz-UZ", {
    style: "currency",
    currency: "UZS",
  });

  return formatter.format(amount);
};
