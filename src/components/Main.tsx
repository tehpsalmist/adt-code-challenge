import React, { useState } from 'react'
import { useFilteredData } from '../hooks/useFilteredData'
import { usePaginatedData } from '../hooks/usePaginatedData'
import { GenrePicker } from './GenrePicker'
import { Loading } from './Loading'
import { Paginator } from './Paginator'
import { RestaurantTable } from './RestaurantTable'
import { SearchBar } from './SearchBar'
import { StatePicker } from './StatePicker'
import { TextInput } from './TextInput'

const searchColumns = ['name', 'city', 'genre']

export const Main = ({ className = '', style = {}, data, error, loading }) => {
  const [search, setSearch] = useState('')
  const [selectedState, setSelectedState] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')

  const stateMatchedList = useFilteredData(data, ['state'], selectedState)

  const genreMatchedList = useFilteredData(stateMatchedList, ['genre'], selectedGenre)

  const searchList = useFilteredData(genreMatchedList, searchColumns, search)

  const [page, setPage] = useState(1)
  const { pageOfData, pages } = usePaginatedData({ data: searchList, page })

  return <main className={`flex flex-col ${className}`} style={style}>
    <h1 className='text-2xl text-center my-2 text-primary-500'>Top Restaurants Nationwide</h1>
    <div className='flex p-2'>
      <StatePicker value={selectedState} onChange={state => {
        setPage(1)
        setSelectedState(state)
      }} />
      <GenrePicker value={selectedGenre} onChange={genre => {
        setPage(1)
        setSelectedGenre(genre)
      }} />
      <SearchBar className='ml-auto' currentSearch={search} onEnter={s => setSearch(s)} />
    </div>
    {loading && <Loading />}
    {pageOfData.length
      ? <>
        <Paginator className='md:hidden mb-4 mx-auto' page={page} setPage={setPage} total={pages} />
        <RestaurantTable restaurants={pageOfData} />
        <Paginator className='mt-4 mx-auto' page={page} setPage={setPage} total={pages} />
      </>
      : <div className='flex-center h-md'>No results found for this state.</div>}
  </main>
}
