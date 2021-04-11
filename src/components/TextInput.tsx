import React, { Ref } from 'react'

interface TextInputProps {
  innerRef?: () => Ref<HTMLInputElement>,
  type?: string,
  placeholder?: string
  pattern?: string
  label?: string
  value?: string
  onChange?(val: string): void
  onEnter?(): void
  className?: string
  inputClass?: string
  labelClass?: string
  required?: boolean
  id?: string
}

// This is a component I developed elsewhere, so if some of these props seem superfluous, that's why.
export const TextInput = ({ innerRef, type = 'text', placeholder, pattern, label, value, onChange, className = '', required, id, onEnter, labelClass, inputClass }: TextInputProps) => {
  return <div className={`flex items-center p-1 ${className}`}>
    <label htmlFor={id || label} className={`text-gray-800 flex-shrink-0 mr-2 ${labelClass}`}>
      {label} {required && <span className='text-red-300'>*</span>}
    </label>
    <input
      ref={innerRef}
      id={id || label}
      className={`text-input ${inputClass}`}
      pattern={pattern}
      type={type}
      value={value}
      onKeyPress={e => e.key === 'Enter' && onEnter()}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required} />
  </div>
}
