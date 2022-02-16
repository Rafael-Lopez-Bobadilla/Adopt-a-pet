import './PlacesInput.css'
import { useEffect, useRef } from 'react'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import { initMap, onChangeAddress, getLocation } from './helperFunctions'
import { expandContainer, shrinkContainer } from '../helperFunctions'
const PlacesInput = () => {
  const input = useRef()
  const getLocationBtn = useRef()
  const initautocomplete = () => {
    if (!input.current) return;
    const autocomplete = new window.google.maps.places.Autocomplete(input.current)
    autocomplete.setFields(['place_id'])
    autocomplete.addListener('place_changed', () => onChangeAddress(autocomplete, closeBtn))
  }
  useEffect(() => {
    initMap().then(() => initautocomplete())
  }, [])

  const handleInput = () => {
    openBtn()
    //deleteLocation()
  }
  const openBtn = () => {
    if (input.current.value === '') {
      getLocationBtn.current.style.display = 'block'
    } else {
      expandContainer('.home', input)
    }
  }

  const closeBtn = () => {
    getLocationBtn.current.style.display = 'none'
    shrinkContainer('.home', '80px')
  }
  const getCurrentLocation = () => {
    closeBtn()
    getLocation(input)
  }
  return (
    <ClickAwayListener onClickAway={closeBtn}>
      <div className='placesInput full-width filter'>
        <input ref={input} type='text' placeholder='Type a location...'
          onInput={handleInput}
          onFocus={openBtn}
          className='full-width'
        />
        <div onClick={getCurrentLocation} className='filter-icon gps' alt='Use Current Location'><GpsFixedIcon style={{ fontSize: '25px' }} /></div>
        <div ref={getLocationBtn} className='placesInput-getLocationBtn' onClick={getCurrentLocation}>Use current location</div>
      </div>
    </ClickAwayListener>
  )
}

export default PlacesInput