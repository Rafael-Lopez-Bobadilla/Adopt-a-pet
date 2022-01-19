import './PlacesInput.css'
import { useEffect, useRef } from 'react'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { initMap, getLocation, geoApi, apiKey } from './helperFunctions'
const PlacesInput = () => {
  const input = useRef()
  const currentLocation = useRef()
  const onChangeAddress = (autocomplete) => {
    const id = autocomplete.getPlace().place_id
    if (!id) {
      //delete location
      return
    }
    const url = `${geoApi}?key=${apiKey}&place_id=${id}`
    fetch(url).then(response => response.json())
      .then(location => {
        const coords = location.results[0].geometry.location
        console.log(coords)
        closeCurrent()
      })
  }
  const initautocomplete = () => {
    if (!input.current) return;
    const autocomplete = new window.google.maps.places.Autocomplete(input.current)
    autocomplete.setFields(['place_id'])
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete))
  }
  useEffect(() => {
    initMap().then(() => initautocomplete())
  }, [])

  const handleInput = () => {
    openCurrent()
    //deleteLocation()
  }
  const openCurrent = () => {
    if (input.current.value === '') {
      currentLocation.current.style.display = 'block'
    }
  }
  const closeCurrent = () => {
    currentLocation.current.style.display = 'none'
  }
  const handleCurrentClick = () => {
    closeCurrent()
    //getLocation(input, setLocation)
  }
  return (
    <ClickAwayListener onClickAway={closeCurrent}>
      <div className='placesInput full-width'>
        <input ref={input} type='text' placeholder='Type a location...'
          onInput={handleInput}
          onFocus={openCurrent}
          className='full-width' />
        <div onClick={handleCurrentClick} className='placesInput-icon'><GpsFixedIcon style={{ fontSize: '25px' }} /></div>
        <div ref={currentLocation} className='placesInput-current' onClick={handleCurrentClick}>Use current location</div>
      </div>
    </ClickAwayListener>
  )
}

export default PlacesInput