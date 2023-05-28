import { useEffect, useState } from 'react'

type Methods = {
  [key in Filter]: () => void
}

interface UseCarViewProps {
  vehicles: Vehicle[]
}

export const useCarView = ({ vehicles }: UseCarViewProps) => {
  const [filtered, setFiltered] = useState<Vehicle[]>([])
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  useEffect(() => {
    setFiltered(vehicles)
  }, [vehicles])

  const methods: Methods = {
    all: () => setFiltered(filtered),
    fromCheapToExpensive: () => {
      const newArr = [...filtered].sort((a, b) => a.price - b.price)
      setFiltered(newArr)
    },
    fromExpensiveToCheap: () => {
      const newArr = [...filtered].sort((a, b) => b.price - a.price)
      setFiltered(newArr)
    },
    fromOldToYoung: () => {
      const newArr = [...filtered].sort((a, b) => a.year - b.year)
      setFiltered(newArr)
    },
    fromYoungToOld: () => {
      const newArr = [...filtered].sort((a, b) => b.year - a.year)
      setFiltered(newArr)
    }
  }

  useEffect(() => {
    methods[activeFilter]()
  }, [activeFilter])

  const onDelete = (id: number) => {
    const newArr = [...filtered].filter((el) => el.id !== id)
    setFiltered(newArr)
  }
  return { onDelete, activeFilter, setActiveFilter, filtered, setFiltered }
}
