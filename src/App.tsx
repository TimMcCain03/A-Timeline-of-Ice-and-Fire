import { MapContainer, ImageOverlay } from 'react-leaflet'
import L from 'leaflet'

const imageWidth = 4737
const imageHeight = 3923

const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [imageHeight, imageWidth],
]

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        crs={L.CRS.Simple}
        bounds={bounds}
        zoom={-2}
        style={{ height: '100%', width: '100%' }}
      >
        <ImageOverlay
          url="/maps/westeros.jpg"
          bounds={bounds}
        />
      </MapContainer>
    </div>
  )
}
