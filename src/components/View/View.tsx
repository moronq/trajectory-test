import { CarsView } from '../CarsView/CarsView'
import { MapView } from '../MapView/MapView'

interface ViewProps {
  activeView: ActiveView
  filtered: Vehicle[]
  setVehicles: () => void
  setFiltered: () => void
}

export const View: React.FC<ViewProps> = ({ activeView, filtered, setFiltered }) => (
  <div>
    {activeView === 'cars' && <CarsView filtered={filtered} setFiltered={setFiltered} />}
    {activeView === 'map' && <MapView vehicles={filtered} />}
  </div>
)
