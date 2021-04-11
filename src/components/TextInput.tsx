import React, { ChangeEvent, Ref } from 'react'

interface TextInputProps {
  innerRef?: () => Ref<HTMLInputElement>,
  type?: string,
  placeholder?: string
  pattern?: string
  label?: string
  value?: string
  onChange?: (val: string) => void
  className?: string
  required?: boolean
  id?: string
}

export const TextInput = ({ innerRef, type = 'text', placeholder, pattern, label, value, onChange, className = '', required, id }: TextInputProps) => {
  return <div className={`flex items-center p-1 ${className}`}>
    <label htmlFor={id || label} className='text-gray-800 flex-shrink-0 mr-2'>
      {label} {required && <span className='text-red-300'>*</span>}
    </label>
    <input
      ref={innerRef}
      id={id || label}
      className='text-input'
      pattern={pattern}
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required} />
  </div>
}
