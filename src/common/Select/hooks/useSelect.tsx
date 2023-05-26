import React, { RefObject } from 'react'

import { useOnClickOutside } from '../../../utils/hooks/useOnClickOutside'

interface UseSelectProps {
  setActiveCoin: React.Dispatch<React.SetStateAction<CoinInfo | null>>
  filterListRef: RefObject<HTMLDivElement>
}

export const useSelect = ({ setActiveCoin, filterListRef }: UseSelectProps) => {
  const [active, setActive] = React.useState(false)
  const filterList: [Filter] = [
    'all',
    'fromCheapToExpensive',
    'fromExpensiveToCheap',
    'fromOldToYoung',
    'fromYoungToOld'
  ]

  useOnClickOutside(filterListRef, () => setActive(false))

  const onSelectHandler = (coin: string) => {
    setActiveCoin(coin)
    setActive(false)
  }
  const onClickHandler = () => setActive(!active)

  return { active, filterList, onClickHandler, onSelectHandler }
}
