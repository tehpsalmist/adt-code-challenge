import React, { StyleHTMLAttributes, useState } from 'react'
import { TextInput } from './TextInput'

interface SearchBarProps {
  className?: string
  style?: StyleHTMLAttributes<HTMLDivElement>
  currentSearch: string
  onEnter(search: string): void
}

export const SearchBar = ({ className = '', style = {}, currentSearch, onEnter }) => {
  const [search, setSearch] = useState('')

  const sendSearchTerm = (auto?: string) => {
    onEnter(auto ?? search)
  }

  return <div className={`flex space-x-1 ${className}`} style={style}>
    <TextInput
      label='Search:'
      className='ml-auto max-w-sm'
      inputClass={search === currentSearch ? 'text-gray-500' : ''}
      value={search}
      type='text'
      onChange={val => {
        setSearch(val)

        if (!val) sendSearchTerm(val)
      }}
      onEnter={sendSearchTerm}
    />
    <button type='button' className='min-w-12 flex-center border rounded shadow hover:bg-gray-100' onClick={() => sendSearchTerm()}>🔍</button>
  </div>
}
