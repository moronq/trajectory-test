import React, { useRef, useState } from 'react'

import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'

interface UseCarProps {
  car: Vehicle
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
  onDelete: (id: number) => void
}

export const useCar = ({ car, setFiltered, onDelete }: UseCarProps) => {
  const [isEditActive, setIsEditActive] = useState(false)
  const carItemRef = useRef(null)
  const [value, setValue] = useState({
    name: car.name,
    model: car.model,
    price: car.price,
    year: car.year
  })
  const onSubmit = () => {
    setFiltered((prev) => prev.map((el) => (el.id !== car.id ? el : { ...el, ...value })))
    setIsEditActive(false)
  }

  useOnClickOutside(carItemRef, () => {
    onSubmit()
  })

  const onDeleteClick = () => {
    onDelete(car.id)
  }
  const onEditClick = () => {
    setIsEditActive(true)
  }

  const onChangeHanlder = (key: string, newValue: string) => {
    setValue({
      ...value,
      [key]: newValue
    })
  }
  return {
    carItemRef,
    isEditActive,
    value,
    onSubmit,
    onDeleteClick,
    onEditClick,
    onChangeHanlder
  }
}
