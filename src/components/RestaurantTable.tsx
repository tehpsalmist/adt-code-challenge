import React from 'react'

export const RestaurantTable = ({ className = '', style = {}, restaurants = [] }) => {
  return <div className={`${className}`} style={style}>
    <table className='w-full text-left'>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Phone Number</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {restaurants?.map(restaurant => {
          return <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>{restaurant.telephone}</td>
            <td>{restaurant.genre}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}
