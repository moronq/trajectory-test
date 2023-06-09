import React, { useEffect, useState } from 'react'

export const useMainPage = () => {
  const [activeView, setActiveView] = useState<ActiveView>('cars')
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [filtered, setFiltered] = useState<Vehicle[]>([])

  useEffect(() => {
    setFiltered(vehicles)
  }, [vehicles])

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const input = e.target as HTMLElement
    setActiveView(input.innerText.toLowerCase() as ActiveView)
  }

  useEffect(() => {
    fetch('https://test.tspb.su/test-task/vehicles')
      .then((res) => res.json())
      .then((res) => setVehicles(res))
  }, [])

  return { activeView, vehicles, filtered, onClickHandler, setFiltered }
}
