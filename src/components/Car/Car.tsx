import { EditableField } from '../../common/EditableField/EditableField'

import { useCar } from './hooks/useCar'

import styles from './Car.module.css'

interface CarProps {
  car: Vehicle
  onDelete: (id: number) => void
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
}

export const Car: React.FC<CarProps> = ({ car, onDelete, setFiltered }) => {
  const { carItemRef, isEditActive, value, onChangeHanlder, onSubmit, onDeleteClick, onEditClick } =
    useCar({
      car,
      onDelete,
      setFiltered
    })

  return (
    <div ref={carItemRef} className='border p-4 rounded-xl flex justify-between w-64'>
      <ul>
        <EditableField
          textField='name'
          isActive={isEditActive}
          textFieldValue={car.name}
          value={value.name}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='model'
          isActive={isEditActive}
          textFieldValue={car.model}
          value={value.model}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='price'
          isActive={isEditActive}
          textFieldValue={car.price}
          value={value.price}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='year'
          isActive={isEditActive}
          textFieldValue={car.year}
          value={value.year}
          onChange={onChangeHanlder}
        />
      </ul>
      {isEditActive && <button onClick={onSubmit}>submit</button>}
      {!isEditActive && (
        <div className='self-start flex gap-2'>
          <button onClick={onEditClick}>
            {/* <div className={styles.edit} /> */}
            <svg
              width='20px'
              height='20px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15 6.5L17.5 9M11 20H20M4 20V17.5L16.75 4.75C17.4404 4.05964 18.5596 4.05964 19.25 4.75V4.75C19.9404 5.44036 19.9404 6.55964 19.25 7.25L6.5 20H4Z'
                stroke='#000000'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button onClick={onDeleteClick}>del</button>
        </div>
      )}
    </div>
  )
}
