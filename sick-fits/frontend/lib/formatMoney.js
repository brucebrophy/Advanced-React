export default function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "CAD",
    minimumFractionDigits: 2,
  };

  const formatter = new Intl.NumberFormat("en-US", options);

  return formatter.format(amount / 100);
}
