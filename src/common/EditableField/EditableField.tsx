import React from 'react'

interface EditableFieldProps {
  textField: string
  textFieldValue: string | number
  value?: string | number
  onChange?: (key: string, value: string) => void
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
    if (onChange) {
      onChange(textField, e.target.value)
    }
  }

  return (
    <li className='flex gap-5 justify-between'>
      <span className='capitalize'>{`${textField}:`}</span>
      {isActive ? (
        <input
          className='border w-40 px-1 h-6 self-center rounded-md'
          value={value}
          onChange={(e) => onChangeHandler(e)}
        />
      ) : (
        <span className='w-32 text-ellipsis whitespace-nowrap overflow-hidden'>{` ${textFieldValue}`}</span>
      )}
    </li>
  )
}
