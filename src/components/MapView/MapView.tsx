import * as mapboxgl from 'mapbox-gl'
import ReactDOM from 'react-dom/client'

import { Marker } from '../Marker/Marker'

import { getAverageCoords } from '../../utils/helpers/getAverageCoords'

import React, { useEffect, useRef, useState } from 'react'

interface MapViewProps {
  vehicles: Vehicle[]
  coords: [number, number]
}

export const MapView: React.FC<MapViewProps> = ({ vehicles }) => {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    const markerClicked = (title) => {
      window.alert(title)
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
        <Marker onClick={markerClicked} vehicles={feature} />
      )

      new mapboxgl.Marker(ref.current).setLngLat([feature.longitude, feature.latitude]).addTo(map)
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    return () => map.remove()
  })

  return (
    <div>
      <div ref={mapContainerRef} className='h-screen' />
    </div>
  )
}
