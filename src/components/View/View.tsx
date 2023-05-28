import { CarsView } from '../CarsView/CarsView'
import { MapView } from '../MapView/MapView'

interface ViewProps {
  activeView: ActiveView
  vehicles: Vehicle[]
  setVehicles: () => void
}

export const View: React.FC<ViewProps> = ({ activeView, vehicles }) => (
  <div>
    {activeView === 'cars' && <CarsView vehicles={vehicles} />}
    {activeView === 'map' && <MapView vehicles={vehicles} />}
  </div>
)
