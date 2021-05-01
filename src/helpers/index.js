/**
 *
 * @param {Number} number
 * @returns
 */
export const currency = (number) => {
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number)
}
