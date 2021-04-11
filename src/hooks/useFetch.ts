import { useEffect, useState } from 'react'

export const useFetch = (url: RequestInfo, options: RequestInit) => {
  const [{ data, error }, setResult] = useState({ data: null, error: null })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(url, options).then(async res => {
      if (!res.ok) {
        setResult({ data: null, error: await res.text()})
        return setLoading(false)
      }

      const json = await res.json()
        .catch(err => err instanceof Error ? err : new Error(JSON.stringify(err)))
      
      setLoading(false)

      if (json instanceof Error) {
        return setResult({ data: null, error: json })
      }
      
      setResult({ data: json, error: null })
    })
  }, [url])

  return {
    data,
    error,
    loading
  }
}
