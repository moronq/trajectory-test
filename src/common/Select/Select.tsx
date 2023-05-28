import React from 'react'

import { useSelect } from './hooks/useSelect'

import styles from './Select.module.css'

interface SelectProps {
  activeFilter: Filter
  setActiveFilter: React.Dispatch<React.SetStateAction<Filter>>
}

export const Select: React.FC<SelectProps> = ({ activeFilter, setActiveFilter }) => {
  const filterListRef = React.useRef<HTMLDivElement>(null)

  const { active, filterList, filters, onClickHandler, onSelectHandler } = useSelect({
    setActiveFilter,
    filterListRef
  })

  return (
    <div ref={filterListRef} className='relative'>
      <button
        className='border p-2 rounded-md flex justify-between gap-2 w-52'
        onClick={onClickHandler}
      >
        <div className={`${styles.select_icon_container} ${active ? styles.active : ''}`} />
        {filters[activeFilter] || '-'}
      </button>

      <ul className={`${styles.coin_list_container} ${active ? styles.active : ''}`}>
        {filterList &&
          filterList.map((el, index) => (
            <li
              className='cursor-pointer p-2 hover:text-white hover:bg-slate-500'
              key={index}
              aria-hidden
              onClick={() => onSelectHandler(el as Filter)}
            >
              {filters[el as Filter]}
            </li>
          ))}
      </ul>
    </div>
  )
}
