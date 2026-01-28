import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useState, useEffect } from 'react'
import { chapters } from './data/chapters'
import type { Chapter } from './data/chapters'
import { locations } from './data/locations'
import type { Location } from './data/locations'
import { useMap } from 'react-leaflet'

function FlyToLocation({ location }: { location: Location | null }) {
  const map = useMap()

  useEffect(() => {
    if (location) {
      map.flyTo([location.y, location.x], 1, { duration: 1.2 })
    }
  }, [location, map])

  return null
}

const imageWidth = 4737
const imageHeight = 3923
const bounds: L.LatLngBoundsExpression = [
  [0, 0],
  [imageHeight, imageWidth],
]

const locationsMap = Object.fromEntries(
  locations.map(loc  => [loc.id, loc])
)

export default function App() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null)
  const [activeLocation, setActiveLocation] = 
    useState<null | typeof locations[number]>(null)

  return (
    <>
      {activeChapter && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'white',
            padding: '16px',
            borderTop: '1px solid #ddd',
            color: 'black',
            zIndex: 1000,
          }}
        >
          <h2 style={{ marginTop: 0 }}>
            {activeChapter.pov.split(' ')[0]}{' '}
          </h2>
          <p>
            <strong>Location:</strong>{" "}
            {locationsMap[activeChapter.locationId].name}
          </p>
          <p style={{ lineHeight: 1.4 }}>
           {activeChapter.summary}
          </p>
        </div>
      )}
      <div 
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1000,
          background: 'white',
          padding: '8px',
          borderRadius: '6px',
        }}
      >
        {chapters.map(ch => (
          <button 
            key={ch.id}
            onClick={() => {
              setActiveChapter(ch)
              setActiveLocation(locationsMap[ch.locationId])
            }}
            style={{ display: 'block'}}
          >
            {ch.chapterTitle}
          </button>
        ))}
      </div>
      <div style={{ height: '100vh', width: '100vw' }}>
        <MapContainer
          crs={L.CRS.Simple}
          bounds={bounds}
          zoom={0}
          style={{ height: '100%', width: '100%' }}
        >
          <ImageOverlay url="/maps/westeros.jpg" bounds={bounds}/>

          {locations.map(loc => (
            <Marker key={loc.id} position={[loc.y, loc.x]}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}

          <FlyToLocation location={activeLocation} />
        </MapContainer>
      </div>
    </>
  )
}
