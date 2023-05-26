type ActiveView = 'cars' | 'map'

type Filter =
  | 'all'
  | 'fromYoungToOld'
  | 'fromOldToYoung'
  | 'fromCheapToExpensive'
  | 'fromExpensiveToCheap'

interface Vehicle {
  color: string
  id: number
  latitude: number
  longitude: number
  model: string
  name: string
  price: number
  year: number
}
