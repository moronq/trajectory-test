import { View } from '../../components/View/View'

import { useMainPage } from './hooks/useMainPage'

export const MainPage = () => {
  const { activeView, onClickHandler, vehicles } = useMainPage()

  return (
    <div>
      <nav className='flex justify-center text-slate-400'>
        <ul className='flex gap-10'>
          <li>
            <button
              className={`${
                activeView === 'cars' && 'border-b-2 border-black text-black'
              } uppercase `}
              onClick={(e) => onClickHandler(e)}
            >
              cars
            </button>
          </li>
          <li>
            <button
              className={`${
                activeView === 'map' && 'border-b-2 border-black text-black'
              } uppercase `}
              onClick={(e) => onClickHandler(e)}
            >
              map
            </button>
          </li>
        </ul>
      </nav>
      <main>
        <View activeView={activeView} vehicles={vehicles} />
      </main>
    </div>
  )
}
