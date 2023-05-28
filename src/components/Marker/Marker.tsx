import styles from './Marker.module.css'

interface MarkerProps {
  onClick: (vehicle: Vehicle) => void
  children: React.ReactNode
  vehicle: Vehicle
}

export const Marker: React.FC<MarkerProps> = ({ onClick, children, vehicle }) => {
  const onClickHandler = () => {
    onClick(vehicle)
  }

  return (
    <button onClick={onClickHandler} className={styles.marker}>
      {children}
    </button>
  )
}
