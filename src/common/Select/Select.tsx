import React from 'react'

import { useSelect } from './hooks/useSelect'

import styles from './Select.module.css'

interface SelectProps {
  activeCoin: Filter
  setActiveCoin: React.Dispatch<React.SetStateAction<Filter>>
}

export const Select: React.FC<SelectProps> = ({ activeCoin, setActiveCoin }) => {
  const filterListRef = React.useRef<HTMLDivElement>(null)

  const { active, filterList, onClickHandler, onSelectHandler } = useSelect({
    setActiveCoin,
    filterListRef
  })

  const filters = {
    all: 'все авто',
    fromCheapToExpensive: 'сначала дешевые',
    fromExpensiveToCheap: 'сначала дорогие',
    fromOldToYoung: 'сначала старые',
    fromYoungToOld: 'сначала новые'
  } as {
    [key in Filter]: string
  }

  return (
    <div ref={filterListRef} className='relative'>
      <button className='border p-2 rounded-md flex justify-between gap-2' onClick={onClickHandler}>
        <div className={`${styles.select_icon_container} ${active ? styles.active : ''}`} />
        {filters[activeCoin] || '-'}
      </button>

      <ul className={`${styles.coin_list_container} ${active ? styles.active : ''}`}>
        {filterList &&
          filterList.map((el, index) => (
            <li
              className='cursor-pointer p-2 hover:text-white hover:bg-slate-500'
              key={index}
              aria-hidden
              onClick={() => onSelectHandler(el)}
            >
              {filters[el]}
            </li>
          ))}
      </ul>
    </div>
  )
}
