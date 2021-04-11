import { Restaurant } from '../types'

export const useFilteredData = (data: Restaurant[] = [], columns: string[], search: string) => {
  if (!search) {
    return data ?? []
  }

  return data.filter(datum => columns.some(column => datum[column].toLowerCase().includes(search.toLowerCase())))
}