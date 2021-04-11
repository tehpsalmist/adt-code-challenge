import React, { StyleHTMLAttributes } from 'react'
import { Restaurant } from '../types'
import { Pill } from './Pill'

interface RestaurantTableProps {
  className?: string
  style?: StyleHTMLAttributes<HTMLDivElement>
  restaurants?: Restaurant[]
}

export const RestaurantTable = ({ className = '', style = {}, restaurants = [] }: RestaurantTableProps) => {
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
          return <tr key={restaurant.id} className='striped'>
            <td className='p-2'>{restaurant.name}</td>
            <td className='p-2'>{restaurant.city}</td>
            <td className='p-2'>{restaurant.state}</td>
            <td className='p-2'>
              <a href={`tel:${restaurant.telephone}`}>{restaurant.telephone}</a>
            </td>
            <td className='p-2'>
              {restaurant.genre.split(',').map(genre => <Pill key={genre} value={genre} />)}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
}
