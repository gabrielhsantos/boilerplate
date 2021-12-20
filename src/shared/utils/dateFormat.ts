import * as moment from 'moment'

const setDate = (params: any): any => {
  const { date, add, subtract, format } = params

  let momentDate = date ? moment(date) : moment()

  if (add) add.forEach(d => momentDate.add(d.amount, d.unit))

  if (subtract) subtract.forEach(d => momentDate.subtract(d.amount, d.unit))

  if (format) {
    return momentDate.format('YYYY-MM-DD')
  } else {
    return momentDate
  }
}

export { setDate }
