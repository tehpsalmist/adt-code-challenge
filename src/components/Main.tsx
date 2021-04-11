import React, { useState } from 'react'
import { useFilteredData } from '../hooks/useFilteredData'
import { usePaginatedData } from '../hooks/usePaginatedData'
import { ColumnName } from '../types'
import { Paginator } from './Paginator'
import { RestaurantTable } from './RestaurantTable'

export const Main = ({ className = '', style = {}, data, error, loading }) => {
  const [column, setFilterColumn] = useState<ColumnName>('name')
  const [value, setFilterValue] = useState('')

  const filteredList = useFilteredData(data, column, value)

  const [page, setPage] = useState(1)
  const { pageOfData, pages } = usePaginatedData({ data: filteredList, page })

  return <main className={`${className}`} style={style}>
    <input value={value} type='text' onChange={e => setFilterValue(e.target.value)} />
    <RestaurantTable restaurants={pageOfData} />
    <Paginator page={page} setPage={setPage} total={pages} />
  </main>
}
