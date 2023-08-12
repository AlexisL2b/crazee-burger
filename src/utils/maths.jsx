export const formatMontant = (priceProduct) => {
  const priceRounded = Math.ceil(priceProduct * 10) / 10
  return priceRounded.toFixed(2)
}
