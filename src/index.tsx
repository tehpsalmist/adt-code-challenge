import React, { useMemo } from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'

export const App = props => {
  const { data, error, loading } = useFetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: `Api-Key ${process.env.API_KEY}`,
    }
  })

  const sortedData = useMemo(() => data?.sort((a, b) => a.name < b.name ? -1 : 1), [data])

  return <Main data={sortedData} error={error} loading={loading} />
}

render(<App />, document.getElementById('app'))
