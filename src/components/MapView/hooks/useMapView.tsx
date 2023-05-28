import * as mapboxgl from 'mapbox-gl'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'

import { Marker } from '../../Marker/Marker'

interface UseMapView {
  vehicles: Vehicle[]
}

export const useMapView = ({ vehicles }: UseMapView) => {
  const mapContainerRef = useRef(null)
  const [selectedCar, setSelectedCar] = useState<null | Vehicle>(null)

  useEffect(() => {
    const markerClicked = (vehicle) => {
      setSelectedCar(vehicle)
    }

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [vehicles[0].longitude, vehicles[0].latitude],
      zoom: 10
    })

    vehicles.forEach((feature) => {
      const ref = React.createRef()
      ref.current = document.createElement('div')
      ReactDOM.createRoot(ref.current as HTMLElement).render(
        <Marker onClick={markerClicked} vehicle={feature} />
      )

      new mapboxgl.Marker(ref.current).setLngLat([feature.longitude, feature.latitude]).addTo(map)
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => map.remove()
  }, [])
  return { mapContainerRef, selectedCar, setSelectedCar }
}
