import mapboxgl from 'mapbox-gl'

import { MainPage } from './pages/MainPage/MainPage'

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9yb25xIiwiYSI6ImNsaTZoazczNzBmMzAza2x1eXE3b283eWEifQ.DK5oOqJ3Rb9EdDTll2zc3w'

const App = () => (
  <div className='max-w-6xl h-screen mx-auto p-4'>
    <MainPage />
  </div>
)

export default App
