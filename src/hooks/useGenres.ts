import { createContext, useContext } from 'react'

const GenreContext = createContext<string[]>([])
export const GenreProvider = GenreContext.Provider

export const useGenres = () => useContext(GenreContext)