import React from 'react'

const buttonClass = `px-2 bg-gray-100 hover:bg-gray-200`
const selectedClass = `bg-gray-200`

export const Paginator = ({ className = '', style = {}, page, setPage, total }) => {
  return <div className={`${className}`} style={style}>
    {getRangeListFromTotalNumber(total).map(pageNumber => <button
      className={`${buttonClass} ${pageNumber === page ? selectedClass : ''}`}
      onClick={e => setPage(pageNumber)}
    >
        {pageNumber}
    </button>)}
  </div>
}

function getRangeListFromTotalNumber (total) {
  return Array(total).fill(1).map((n, i) => n + i)
}
