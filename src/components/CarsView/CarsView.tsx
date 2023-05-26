import { Select } from '../../common/Select/Select'
import { Car } from '../Car/Car'

import { useCarView } from './hooks/useCarView'

interface CarsViewProps {
  vehicles: Vehicle[]
}

export const CarsView: React.FC<CarsViewProps> = ({ vehicles }) => {
  const { filtered, activeFilter, setActiveFilter, onDelete } = useCarView({
    vehicles
  })

  return (
    <>
      {' '}
      <div>
        <Select activeCoin={activeFilter} setActiveCoin={setActiveFilter} />

        <ul className='grid gap-4 grid-cols-4'>
          {filtered.map((el) => (
            <Car key={el.id} car={el} onDelete={onDelete} />
          ))}
        </ul>
      </div>
    </>
  )
}
