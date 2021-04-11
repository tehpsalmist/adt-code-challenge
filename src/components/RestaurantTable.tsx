import React, { StyleHTMLAttributes } from 'react'
import { Restaurant } from '../types'
import { Pill } from './Pill'

interface RestaurantTableProps {
  className?: string
  style?: StyleHTMLAttributes<HTMLDivElement>
  restaurants?: Restaurant[]
}

export const RestaurantTable = ({ className = '', style = {}, restaurants = [] }: RestaurantTableProps) => {
  return <div className={`overflow-x-scroll ${className}`} style={style}>
    <table className='min-w-full text-left'>
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
          return <tr key={restaurant.id} className='striped'>
            <td>{restaurant.name}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>
              <a className='whitespace-nowrap' href={`tel:${restaurant.telephone}`}>{restaurant.telephone}</a>
            </td>
            <td>
              {restaurant.genre.split(',').map(genre => <Pill key={genre} value={genre} />)}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}
