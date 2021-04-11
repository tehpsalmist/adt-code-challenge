import React from 'react'

const buttonClass = `px-2 bg-gray-100 hover:bg-gray-200`
const selectedClass = `bg-gray-200`

export const Paginator = ({ className = '', style = {}, page, setPage, total }) => {
  return <div className={`space-x-1 ${className}`} style={style}>
    <button className={buttonClass} onClick={e => setPage(1)}>{'|<'}</button>
    <button className={buttonClass} onClick={e => page > 1 && setPage(p => p - 1)}>{'<'}</button>
    {getRangeListFromTotalNumber(total).map(pageNumber => <button
      key={pageNumber}
      className={`${buttonClass} ${pageNumber === page ? selectedClass : ''}`}
      onClick={e => setPage(pageNumber)}
    >
        {pageNumber}
    </button>)}
    <button className={buttonClass} onClick={e => page < total && setPage(p => p + 1)}>{'>'}</button>
    <button className={buttonClass} onClick={e => setPage(total)}>{'>|'}</button>
  </div>
}

// create an array as long as the number given, but populated by integers starting at 1 and incrementing successively
function getRangeListFromTotalNumber (total) {
  return Array(total).fill(1).map((n, i) => n + i)
}
