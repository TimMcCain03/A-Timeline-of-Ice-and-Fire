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
      map.flyTo([location.y, location.x], 1.5, { duration: 1.2 })
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

  const [showInitialModal, setShowInitialModal] = useState(true)

  const [selectedChapterForModal, setSelectedChapterForModal] = useState<number | null>(null)

  const [selectedBook, setSelectedBook] = useState<string | null>(null)

  const uniqueBooks = [...new Set(chapters.map(ch => ch.book))].sort()

  const chaptersForSelectedBook = selectedBook
    ? chapters.filter(ch => ch.book === selectedBook)
    : []

  const activeChapter =
    currentIndex !== null ? chapters[currentIndex] : null

  useEffect(() => {
    if (!activeChapter) return

    const loc = locationsMap[activeChapter.locationId]
    if (loc) setActiveLocation(loc)
  }, [activeChapter])

  return (
    <>
      {showInitialModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '32px',
              borderRadius: '8px',
              maxWidth: '500px',
              textAlign: 'center',
              color: 'black',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: '16px' }}>
              Welcome to the Map
            </h2>
            <p style={{ marginBottom: '24px', fontSize: '16px' }}>
              How would you like to start?
            </p>

            <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
              <button
                onClick={() => {
                  setCurrentIndex(0)
                  setShowInitialModal(false)
                }}
                style={{
                  padding: '10px 16px',
                  fontSize: '16px',
                  background: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Start at the Beginning
              </button>

              <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                <select
                  value={selectedBook ?? ''}
                  onChange={(e) => {
                    setSelectedBook(e.target.value || null)
                    setSelectedChapterForModal(null) // Reset chapter when book changes
                  }}
                  style={{
                    padding: '8px',
                    fontSize: '14px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                  }}
                >
                  <option value='' disabled>
                    Choose a book...
                  </option>
                  {uniqueBooks.map(book => (
                    <option key={book} value={book}>
                      {book}
                    </option>
                  ))}
                </select>

                {selectedBook && (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select 
                      value={selectedChapterForModal ?? ''}
                      onChange={(e) => setSelectedChapterForModal(Number(e.target.value))}
                      style={{
                        flex: 1,
                        padding: '8px',
                        fontSize: '14px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                      }}
                    >
                      <option value='' disabled>
                        Choose a chapter...
                      </option>
                      {chaptersForSelectedBook.map((ch, idx) => (
                        <option key={ch.id} value={chapters.indexOf(ch)}>
                          {ch.chapterTitle}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => {
                        if (selectedChapterForModal !== null) {
                          setCurrentIndex(selectedChapterForModal)
                          setShowInitialModal(false)
                        }
                      }}
                      disabled={selectedChapterForModal === null}
                      style={{
                        padding: '8px 16px',
                        fontSize: '14px',
                        background: selectedChapterForModal !== null ? '#666' : '#ccc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: selectedChapterForModal !== null ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Go
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeChapter && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            background: 'rgba(225, 225, 225, 0.5)',
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
          zoomControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          <ImageOverlay url="./maps/westeros.jpg" bounds={bounds} />

          {locations.map(loc => {
            // might not use any of this idk
            //
            // const icon = loc.icon
            //   ? L.icon({
            //       iconUrl: loc.icon,
            //       iconSize: [32, 37],
            //       iconAnchor: [16, 37],
            //       popupAnchor: [0, -28],
            //       shadowUrl: markerShadow,
            //     })
            //   : undefined
            //
            // add to Maker below when chap icons is fixed "icon={icon}""

            return (
              <Marker key={loc.id} position={[loc.y, loc.x]}>
                <Popup>{loc.name}</Popup>
              </Marker>
            )
          })}

          <FlyToLocation location={activeLocation} />
        </MapContainer>
      </div>
    </>
  )
}
