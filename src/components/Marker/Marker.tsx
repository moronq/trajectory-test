import styles from './Marker.module.css'

interface MarkerProps {
  onClick: (vehicle: Vehicle) => void
  vehicle: Vehicle
}

export const Marker: React.FC<MarkerProps> = ({ onClick, vehicle }) => {
  const onClickHandler = () => {
    onClick(vehicle)
  }

  return <button onClick={onClickHandler} className={styles.marker} />
}
