import { useRef, useState } from 'react'
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside'

interface CarProps {
  car: Vehicle
  onDelete: (id: number) => void
}

export const Car: React.FC<CarProps> = ({ car, onDelete }) => {
  const [isEditActive, setIsEditActive] = useState(false)
  const carItemRef = useRef(null)
  useOnClickOutside(carItemRef, () => setIsEditActive(false))

  const onDeleteClick = () => {
    onDelete(car.id)
  }
  const onEditClick = () => {
    setIsEditActive(true)
  }
  return (
    <div ref={carItemRef} className='border p-4 rounded-xl flex justify-between'>
      <ul>
        <li>
          <span>Name:</span>
          {isEditActive ? <input /> : <span>{car.name}</span>}
        </li>
        <li>
          <span>Model:</span>
          {isEditActive ? <input /> : <span>{car.model}</span>}
        </li>
        <li>
          <span>Price:</span>
          {isEditActive ? <input /> : <span>{car.price}</span>}
        </li>
        <li>Year: {car.year}</li>
      </ul>
      <div className='self-start flex gap-2'>
        <button onClick={onEditClick}>edit</button>
        <button onClick={onDeleteClick}>del</button>
      </div>
    </div>
  )
}
