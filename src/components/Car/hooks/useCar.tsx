import React, { useState } from 'react'

interface UseCarProps {
  car: Vehicle
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
  onDelete: (id: number) => void
  setActiveEditCard: React.Dispatch<React.SetStateAction<number | null>>
}

export const useCar = ({ car, setFiltered, onDelete, setActiveEditCard }: UseCarProps) => {
  const [value, setValue] = useState({
    name: car.name,
    model: car.model,
    price: car.price,
    year: car.year
  })
  const onSubmit = () => {
    setFiltered((prev) => prev.map((el) => (el.id !== car.id ? el : { ...el, ...value })))
    setActiveEditCard(null)
  }

  const onDeleteClick = () => {
    onDelete(car.id)
  }
  const onEditClick = () => {
    setActiveEditCard(car.id)
  }

  const onChangeHanlder = (key: string, newValue: string) => {
    setValue({
      ...value,
      [key]: newValue
    })
  }

  const onDiscard = () => {
    setValue({
      name: car.name,
      model: car.model,
      price: car.price,
      year: car.year
    })
    setActiveEditCard(null)
  }
  return {
    value,
    onDiscard,
    onSubmit,
    onDeleteClick,
    onEditClick,
    onChangeHanlder
  }
}
