import React from 'react'

export const Pill = ({ className = '', style = {}, value }) => {
  return <div className={`inline-block mt-1 bg-primary-200 text-primary-500 rounded-full px-2 py-1 mr-1 whitespace-nowrap ${className}`} style={style}>{value}</div>
}
