import { ColumnName, Restaurant } from '../types'

export const useFilteredData = (data: Restaurant[] = [], column: ColumnName, value: string) => {
  if (!value) {
    return data ?? []
  }

  return data.filter(datum => datum[column].toLowerCase().includes(value.toLowerCase()))
}