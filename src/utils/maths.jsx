export const formatMontant = (priceProduct) => {
  const priceRounded = Math.ceil(priceProduct * 10) / 10
  const priceFormat = priceRounded.toFixed(2)
  return priceFormat.toString()
}
