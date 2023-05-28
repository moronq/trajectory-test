import { Modal } from '..'

import { useMapView } from './hooks/useMapView'

interface MapViewProps {
  vehicles: Vehicle[]
}

export const MapView: React.FC<MapViewProps> = ({ vehicles }) => {
  if (!vehicles.length)
    return (
      <div className='h-[calc(100vh_-_5rem)] flex justify-center items-center'>
        There is no any cars
      </div>
    )
  const { mapContainerRef, selectedCar, setSelectedCar } = useMapView({ vehicles })

  return (
    <div className='h-[calc(100vh_-_5rem)] overflow-hidden my-5 relative'>
      <div ref={mapContainerRef} className='h-full' />
      {selectedCar && (
        <div className='absolute top-6 left-6'>
          <Modal setSelectedCar={setSelectedCar} car={selectedCar} />
        </div>
      )}
    </div>
  )
}
