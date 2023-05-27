import styles from './Marker.module.css'

interface MarkerProps {
  onClick: () => void
  children: React.ReactNode
  vehicles: Vehicle
}

export const Marker: React.FC<MarkerProps> = ({ onClick, children, vehicles }) => {
  const _onClick = () => {
    onClick(vehicles.model)
  }

  return (
    <button onClick={_onClick} className={styles.marker}>
      {children}
    </button>
  )
}
