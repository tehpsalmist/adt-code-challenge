import React from 'react'
import { useGenres } from '../hooks/useGenres'

export const GenrePicker = ({ className = '', style = {}, onChange, value }) => {
  const genres = useGenres()

  return <label className={`p-1 ${className}`} style={style}>
    <span className='mr-1'>Filter By Genre:</span>
    <select className='text-input' value={value} onChange={e => onChange(e.target.value)}>
      <option value=''>All</option>
      {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
    </select>
  </label>
}
