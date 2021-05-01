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

/**
 *
 * @param {Object} param
 * @returns
 */
export const mappingData = (param) => {
  const tmp = []
  if (param) {
    Object.entries(param).forEach((item) => {
      tmp.push(item[1])
    })
  }
  return tmp
}

/**
 *
 * @param {Object} param
 * @returns
 */
export const totalAmount = (param) => {
  let total = 0
  if (param) {
    Object.entries(param).forEach((item) => {
      if (item[1].status === 'SUCCESS') {
        total = total + item[1].amount
      }
    })
  }
  return total
}
