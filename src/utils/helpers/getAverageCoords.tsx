export const getAverageCoords = (arr: Vehicle[]): [number, number] => {
  let latitude = 0
  let longitude = 0
  for (let i = 0; i < arr.length; i++) {
    latitude += arr[i].latitude
    longitude += arr[i].longitude
  }
  return [longitude / arr.length, latitude / arr.length]
}
