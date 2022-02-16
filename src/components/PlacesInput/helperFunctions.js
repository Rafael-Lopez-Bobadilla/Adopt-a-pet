export const apiKey = process.env.REACT_APP_MAPS_KEY
const mapsApi = 'https://maps.googleapis.com/maps/api/js'
export const geoApi = 'https://maps.googleapis.com/maps/api/geocode/json'

export const loadAsyncScript = (src) => {
  return new Promise(resolve => {
    const script = document.createElement('script')
    Object.assign(script, {
      type: 'text/javascript',
      async: true,
      src
    })
    script.addEventListener('load', () => resolve(script))
    document.head.appendChild(script)
  })
}

export const initMap = () => {
  //if script already loaded
  if (window.google) {
    return Promise.resolve()
  }
  const src = `${mapsApi}?key=${apiKey}&libraries=places`
  return loadAsyncScript(src)
}

export const onChangeAddress = (autocomplete, closeBtn) => {
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
      closeBtn()
    })
}

export const getLocation = (input) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const coords = { lat: position.coords.latitude, lng: position.coords.longitude }
      const url = `${geoApi}?key=${apiKey}&latlng=${coords.lat},${coords.lng}`
      input.current.value = 'Searching your location'
      fetch(url).then(response => response.json())
        .then(place => {
          input.current.value = place.plus_code.compound_code
          //setLocation(coords)
        })
    })
  }
}