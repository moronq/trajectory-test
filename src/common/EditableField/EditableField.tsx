import React from 'react'

interface EditableFieldProps {
  textField: string
  textFieldValue: string | number
  value: string | number
  onChange: (key: string, value: string) => void
  isActive: boolean
}

export const EditableField: React.FC<EditableFieldProps> = ({
  textField,
  textFieldValue,
  value,
  isActive,
  onChange
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(textField, e.target.value)
  }

  return (
    <li>
      <span className='capitalize'>{`${textField}:`}</span>
      {isActive ? (
        <input className='border' value={value} onChange={(e) => onChangeHandler(e)} />
      ) : (
        <span>{` ${textFieldValue}`}</span>
      )}
    </li>
  )
}
