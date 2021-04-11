import React, { useState } from 'react'
import { useFilteredData } from '../hooks/useFilteredData'
import { usePaginatedData } from '../hooks/usePaginatedData'
import { Loading } from './Loading'
import { Paginator } from './Paginator'
import { RestaurantTable } from './RestaurantTable'
import { StatePicker } from './StatePicker'
import { TextInput } from './TextInput'

const searchColumns = ['name', 'city', 'genre']

export const Main = ({ className = '', style = {}, data, error, loading }) => {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('')
  // const [selectedGenre, setSelectedGenre] = useState('')

  const stateMatchedList = useFilteredData(data, ['state'], selectedState)

  // const genreMatchedList = useFilteredData(stateMatchedList, ['genre'], selectedGenre)

  const searchList = useFilteredData(stateMatchedList, searchColumns, search)

  const [page, setPage] = useState(1)
  const { pageOfData, pages } = usePaginatedData({ data: searchList, page })

  return <main className={`flex flex-col ${className}`} style={style}>
    <div className='flex space-x-2'>
      <StatePicker value={selectedState} onChange={state => {
        setPage(1)
        setSelectedState(state)
      }} />
      <TextInput label='Search:' className='max-w-sm' value={search} type='text' onChange={val => setSearch(val)} />
    </div>
    {loading && <Loading />}
    {pageOfData.length ? <RestaurantTable restaurants={pageOfData} /> : <div className='flex-center h-md'>No results found for this state.</div>}
    
    <Paginator className='mt-4 mx-auto' page={page} setPage={setPage} total={pages} />
  </main>
}
