import React, { useState } from 'react'
import { useFilteredData } from '../hooks/useFilteredData'
import { usePaginatedData } from '../hooks/usePaginatedData'
import { ColumnName } from '../types'
import { Paginator } from './Paginator'
import { RestaurantTable } from './RestaurantTable'
import { TextInput } from './TextInput'

export const Main = ({ className = '', style = {}, data, error, loading }) => {
  const [column, setFilterColumn] = useState<ColumnName>('name')
  const [value, setFilterValue] = useState('')

  const filteredList = useFilteredData(data, column, value)

  const [page, setPage] = useState(1)
  const { pageOfData, pages } = usePaginatedData({ data: filteredList, page })

  return <main className={`flex flex-col ${className}`} style={style}>
    <div>
      <TextInput label='Filter Value' value={value} type='text' onChange={val => setFilterValue(val)} />
    </div>
    <RestaurantTable restaurants={pageOfData} />
    <Paginator className='mt-4 mx-auto' page={page} setPage={setPage} total={pages} />
  </main>
}
