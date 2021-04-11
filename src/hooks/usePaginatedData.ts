export const usePaginatedData = ({ data = [], page = 1, limit = 10 }) => {
  const startingIndexOfPage = limit * (page - 1)
  const endingIndexOfPage = startingIndexOfPage + limit

  return {
    pageOfData: data.slice(startingIndexOfPage, endingIndexOfPage),
    pages: Math.ceil(data.length / limit)
  }
}