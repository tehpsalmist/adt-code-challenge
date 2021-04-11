import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { useFetch } from './hooks/useFetch'

export const App = props => {
  const { data, error, loading } = useFetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
    headers: {
      Authorization: `Api-Key ${process.env.API_KEY}`,
    }
  })

  return <Main {...{ data, error, loading }} />
}

render(<App />, document.getElementById('app'))
