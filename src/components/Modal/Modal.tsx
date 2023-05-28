import React from 'react'

import { EditableField } from '../../common/EditableField/EditableField'

import styles from './Modal.module.css'

interface ModalProps {
  car: Vehicle
  setSelectedCar: React.Dispatch<React.SetStateAction<Vehicle | null>>
}

export const Modal: React.FC<ModalProps> = ({ car, setSelectedCar }) => {
  const onCloseClick = () => {
    setSelectedCar(null)
  }
  return (
    <div className='bg-white flex p-5 rounded-xl'>
      <ul className='flex flex-col gap-2'>
        <EditableField textField='name' isActive={false} textFieldValue={car.name} />
        <EditableField textField='model' isActive={false} textFieldValue={car.model} />
        <EditableField textField='price' isActive={false} textFieldValue={car.price} />
        <EditableField textField='year' isActive={false} textFieldValue={car.year} />
      </ul>
      <div>
        <button onClick={onCloseClick}>
          <div className={styles.close} />
        </button>
      </div>
    </div>
  )
}
