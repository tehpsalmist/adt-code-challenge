import React from 'react'

export const Pill = ({ className = '', style = {}, value }) => {
  return <span className={`bg-primary-200 text-primary-500 rounded-full px-2 py-1 mr-1 ${className}`} style={style}>{value}</span>
}
