import { stations } from '@shared/constants/stations'
import { IStation } from '@shared/types/station'

import { MarkerStationDialog } from '@components/organisms/StationDialog'

import markerDark from '@assets/marker-dark.png'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api'

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDWPV4cI1tyKN6aznnGzzkP_6EJqNgGE6M',
  })

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

          {stations.map((station, index) => {
            return <MarkerStationDialog key={index} station={station} />
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
