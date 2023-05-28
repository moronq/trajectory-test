import { EditableField } from '../../common'

import { useCar } from './hooks/useCar'

import styles from './Car.module.css'

interface CarProps {
  car: Vehicle
  onDelete: (id: number) => void
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
  activeEditCard: null | number
  setActiveEditCard: React.Dispatch<React.SetStateAction<number | null>>
}

export const Car: React.FC<CarProps> = ({
  car,
  onDelete,
  setFiltered,
  activeEditCard,
  setActiveEditCard
}) => {
  const { value, onDiscard, onChangeHanlder, onSubmit, onDeleteClick, onEditClick } = useCar({
    car,
    onDelete,
    setFiltered,
    setActiveEditCard
  })

  return (
    <div className='border p-4 rounded-xl flex justify-between w-72'>
      <ul className='flex flex-col gap-2'>
        <EditableField
          textField='name'
          isActive={activeEditCard === car.id}
          textFieldValue={car.name}
          value={value.name}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='model'
          isActive={activeEditCard === car.id}
          textFieldValue={car.model}
          value={value.model}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='price'
          isActive={activeEditCard === car.id}
          textFieldValue={car.price}
          value={value.price}
          onChange={onChangeHanlder}
        />
        <EditableField
          textField='year'
          isActive={activeEditCard === car.id}
          textFieldValue={car.year}
          value={value.year}
          onChange={onChangeHanlder}
        />
      </ul>
      {activeEditCard === car.id && (
        <div className='flex gap-2 self-start flex-col'>
          <button onClick={onSubmit}>
            <div className={styles.accept} />
          </button>
          <button onClick={onDiscard}>
            <div className={styles.discard} />
          </button>
        </div>
      )}
      {activeEditCard !== car.id && (
        <div className='self-start flex gap-2'>
          <button onClick={onEditClick}>
            <div className={styles.edit} />
          </button>
          <button onClick={onDeleteClick}>
            <div className={styles.delete} />
          </button>
        </div>
      )}
    </div>
  )
}
