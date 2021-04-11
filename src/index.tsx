import React, { createContext, useMemo } from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'
import { GenreProvider } from './hooks/useGenres'
import { Restaurant } from './types'

export const App = props => {
  const { data, error, loading } = useFetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: `Api-Key ${process.env.API_KEY}`,
    }
  })

  const genres = useMemo(() => {
    const genreMap = {}

    data?.forEach((restaurant: Restaurant) => {
      restaurant.genre.split(',').forEach(genre => {
        genreMap[genre] = 1
      })
    })

    return Object.keys(genreMap)
  }, [data])

  const sortedData = useMemo(() => data?.sort((a, b) => a.name < b.name ? -1 : 1), [data])

  return <GenreProvider value={genres}>
    <Main data={sortedData} error={error} loading={loading} />
  </GenreProvider>
}

render(<App />, document.getElementById('app'))
