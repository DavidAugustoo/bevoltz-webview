import markerDark from '@assets/marker-dark.png'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

interface IStation {
  title: string
  cords: {
    lat: number
    lng: number
  }
  type: 'fast' | 'normal'
}

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDWPV4cI1tyKN6aznnGzzkP_6EJqNgGE6M',
  })

  const stations: IStation[] = [
    {
      title: 'Station 1',
      cords: {
        lat: -23.575328,
        lng: -46.622491,
      },
      type: 'fast',
    },
    {
      title: 'Station 2',
      cords: {
        lat: -23.57217,
        lng: -46.624176,
      },
      type: 'fast',
    },
    {
      title: 'Station 3',
      cords: {
        lat: -23.576979,
        lng: -46.624114,
      },
      type: 'fast',
    },
    {
      title: 'Station 4',
      cords: {
        lat: -23.571991,
        lng: -46.621494,
      },
      type: 'fast',
    },
  ]

  const stationTypes = {
    fast: 'https://i.ibb.co/txykmBd/marker-dark.png',
    normal: 'https://i.ibb.co/tY4Y30C/marker-light.png',
  }

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{
            lat: -23.57415,
            lng: -46.62309,
          }}
          options={{
            streetViewControl: false, // desabilita o controle Street View
            scaleControl: false, // desabilita o controle de escala
            mapTypeControl: false, // desabilita o controle de tipo de mapa
            zoomControl: false, // desabilita o controle de zoom
            rotateControl: false, // desabilita o controle de rotação
            fullscreenControl: false, // desabilita o controle de tela cheia
          }}
          zoom={17}
        >
          <MarkerF
            position={{
              lat: -23.57415,
              lng: -46.62309,
            }}
          />

          {stations.map(({ cords, title, type }) => {
            return (
              <MarkerF key={title} position={cords} icon={stationTypes[type]} />
            )
          })}
        </GoogleMap>
      ) : (
        <>
          <p>Carregando Mapa</p>
        </>
      )}
    </>
  )
}
