import { CarsView, MapView } from '..'

interface ViewProps {
  activeView: ActiveView
  filtered: Vehicle[]
  setFiltered: React.Dispatch<React.SetStateAction<Vehicle[]>>
}

export const View: React.FC<ViewProps> = ({ activeView, filtered, setFiltered }) => (
  <div>
    {activeView === 'cars' && <CarsView filtered={filtered} setFiltered={setFiltered} />}
    {activeView === 'map' && <MapView vehicles={filtered} />}
  </div>
)
