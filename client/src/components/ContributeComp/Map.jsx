import React from 'react'
import { GoogleMap,useLoadScript,MarkerF } from '@react-google-maps/api'

const Map = ({selectedLocation}) => {
    const {isloaded}=useLoadScript({
        googleMapsApiKey:"01684ca95f9345eca96d482708804522"
    })
  return (
    <div>
      <GoogleMap
      mapContainerStyle={{height:"150px"}}
      center={selectedLocation}
      zoom={13}
      onLoad={}
      >

      </GoogleMap>
    </div>
  )
}

export default Map
