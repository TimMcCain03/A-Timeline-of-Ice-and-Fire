import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { useState, useEffect } from 'react'
import { chapters } from './data/chapters'
import { locations } from './data/locations'
import type { Location } from './data/locations'
import { useMap } from 'react-leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

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
  const [activeLocation, setActiveLocation] =
    useState<Location | null>(null)

  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const activeChapter =
    currentIndex !== null ? chapters[currentIndex] : null

  useEffect(() => {
    if (!activeChapter) return

    const loc = locationsMap[activeChapter.locationId]
    if (loc) setActiveLocation(loc)
  }, [activeChapter])

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
            {activeChapter.pov.split(' ')[0]}
          </h2>

          <p>
            <strong>Location:</strong>{' '}
            {locationsMap[activeChapter.locationId]?.name}
          </p>

          <p>{activeChapter.summary}</p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
            <button
              onClick={() =>
                setCurrentIndex(i => (i !== null && i > 0 ? i - 1 : i))
              }
              disabled={currentIndex === null || currentIndex === 0}
            >
              ⏮ Previous
            </button>

            <button
              onClick={() =>
                setCurrentIndex(i =>
                  i !== null && i < chapters.length - 1 ? i + 1 : i
                )
              }
              disabled={
                currentIndex === null ||
                currentIndex === chapters.length - 1
              }
            >
              Next ⏭
            </button>
          </div>
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
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Jump to chapter:
        </label>

        <select
          value={currentIndex ?? ''}
          onChange={(e) => setCurrentIndex(Number(e.target.value))}
          style={{
            width: '220px',
            padding: '4px',
          }}
        >
          <option value="" disabled>
            Select a chapter…
          </option>

          {chapters.map((ch, index) => (
            <option key={ch.id} value={index}>
              {ch.chapterTitle}
            </option>
          ))}
        </select>
      </div>


      <div style={{ height: '100vh', width: '100vw' }}>
        <MapContainer
          crs={L.CRS.Simple}
          bounds={bounds}
          zoom={0}
          style={{ height: '100%', width: '100%' }}
        >
          <ImageOverlay url="./maps/westeros.jpg" bounds={bounds} />

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

// test