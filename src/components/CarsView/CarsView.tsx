import { Select } from '../../common'
import { Car } from '..'

import { useCarView } from './hooks/useCarView'

interface CarsViewProps {
  filtered: Vehicle[]
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
}

export const CarsView: React.FC<CarsViewProps> = ({ filtered, setFiltered }) => {
  const { activeFilter, aciveEditCard, setActiveFilter, onDelete, setActiveEditCard } = useCarView({
    setFiltered,
    filtered
  })

  return (
    <div>
      <div className='flex justify-end px-6 py-4'>
        <Select activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>
      <div className='h-[calc(100vh_-_7.5rem)] overflow-scroll'>
        <ul className='grid grid-cols-3 flex-wrap gap-4 justify-items-center'>
          {filtered.map((el) => (
            <Car
              key={el.id}
              car={el}
              onDelete={onDelete}
              setFiltered={setFiltered}
              activeEditCard={aciveEditCard}
              setActiveEditCard={setActiveEditCard}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
