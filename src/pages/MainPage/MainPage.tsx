import { useMainPage } from './hooks/useMainPage'
import { View } from '../../components/View/View'

export const MainPage = () => {
  const { activeView, onClickHandler, vehicles } = useMainPage()
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={(e) => onClickHandler(e)}>cars</button>
          </li>
          <li>
            <button onClick={(e) => onClickHandler(e)}>map</button>
          </li>
        </ul>
      </nav>
      <main>
        <View activeView={activeView} vehicles={vehicles} />
      </main>
    </div>
  )
}
