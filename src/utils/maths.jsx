export const formatMontant = (priceProduct) => {
  const priceRounded = Math.ceil(priceProduct * 10) / 10
  const priceFormat = priceRounded.toFixed(2)
  return priceFormat.toString()
}

export const sum = (obj) =>
  Object.values(obj).reduce((acc, val) => acc + val, 0)
