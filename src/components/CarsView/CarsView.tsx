import { Select } from '../../common/Select/Select'
import { Car } from '../Car/Car'

import { useCarView } from './hooks/useCarView'

interface CarsViewProps {
  vehicles: Vehicle[]
}

export const CarsView: React.FC<CarsViewProps> = ({ vehicles }) => {
  const { filtered, activeFilter, setActiveFilter, onDelete, setFiltered } = useCarView({
    vehicles
  })

  return (
    <>
      <div>
        <div className='flex justify-end px-6 py-4'>
          <Select activeCoin={activeFilter} setActiveCoin={setActiveFilter} />
        </div>

        <ul className='grid grid-cols-4 flex-wrap justify-center gap-4'>
          {filtered.map((el) => (
            <Car key={el.id} car={el} onDelete={onDelete} setFiltered={setFiltered} />
          ))}
        </ul>
      </div>
    </>
  )
}
