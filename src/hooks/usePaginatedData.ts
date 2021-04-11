import { Restaurant } from '../types'

interface PaginatedDataInput<DataType> {
  data: DataType[]
  page?: number
  limit?: number
}

interface PaginatedDataOutput<DataType> {
  pageOfData: DataType[]
  pages: number
}

export const usePaginatedData = <DataType = Restaurant>({ data = [], page = 1, limit = 10 }: PaginatedDataInput<DataType>): PaginatedDataOutput<DataType> => {
  const startingIndexOfPage = limit * (page - 1)
  const endingIndexOfPage = startingIndexOfPage + limit

  return {
    pageOfData: data.slice(startingIndexOfPage, endingIndexOfPage),
    pages: Math.ceil(data.length / limit)
  }
}