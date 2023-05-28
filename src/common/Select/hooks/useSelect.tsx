import React, { RefObject } from 'react'

import { useOnClickOutside } from '../../../utils'

interface UseSelectProps {
  setActiveFilter: React.Dispatch<React.SetStateAction<Filter>>
  filterListRef: RefObject<HTMLDivElement>
}

export const useSelect = ({ setActiveFilter, filterListRef }: UseSelectProps) => {
  const [active, setActive] = React.useState(false)

  const filters = {
    all: 'все авто',
    fromCheapToExpensive: 'сначала дешевые',
    fromExpensiveToCheap: 'сначала дорогие',
    fromOldToYoung: 'сначала старые',
    fromYoungToOld: 'сначала новые'
  } as {
    [key in Filter]: string
  }

  const filterList = Object.keys(filters)

  useOnClickOutside(filterListRef, () => setActive(false))

  const onSelectHandler = (coin: Filter) => {
    setActiveFilter(coin)
    setActive(false)
  }
  const onClickHandler = () => setActive(!active)

  return { active, filterList, filters, onClickHandler, onSelectHandler }
}
