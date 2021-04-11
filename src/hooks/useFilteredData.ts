import { ColumnName } from '../types'

export const useFilteredData = (data = [], column: ColumnName, value: string) => {
  if (!value) {
    return data ?? []
  }

  return data.filter(datum => datum[column].includes(value))
}