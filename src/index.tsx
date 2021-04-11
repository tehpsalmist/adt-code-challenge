import React, { createContext, useMemo } from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'
import { GenreProvider } from './hooks/useGenres'
import { Restaurant } from './types'

export const App = props => {
  // FWIW, I tried to hit this endpoint with various query strings (?sort=name, etc...)
  // to see if it could do server-side filtering/sorting, but didn't find anything.
  // So, all filtering/sorting is done on the client.
  const { data, error, loading } = useFetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: `Api-Key ${process.env.API_KEY}`,
    }
  })

  // Create list of genres based on what is fetched from API. Sort them alphabetically.
  const genres = useMemo(() => {
    const genreMap = {}

    data?.forEach((restaurant: Restaurant) => {
      restaurant.genre.split(',').forEach(genre => {
        genreMap[genre] = 1
      })
    })

    return Object.keys(genreMap).sort((a, b) => a < b ? -1 : 1)
  }, [data])

  const sortedData = useMemo(() => data?.sort((a, b) => a.name < b.name ? -1 : 1), [data])

  return <GenreProvider value={genres}>
    <Main data={sortedData} error={error} loading={loading} />
  </GenreProvider>
}

render(<App />, document.getElementById('app'))
