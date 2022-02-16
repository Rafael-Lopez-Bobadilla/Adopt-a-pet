import './Home.css'
import SelectAutocomplete from '../SelectAutocomplete/SelectAutocomplete'
import PlacesInput from '../PlacesInput/PlacesInput'
import { useState, useEffect } from 'react'
const Home = () => {
  const filters = useState(() => {
    const initalFilters = new URLSearchParams('type=dog&distance=500&status=adoptable')
    return initalFilters
  })

  useEffect(() => {
    console.log(`${filters.toString()}`)
  }, [filters])

  return (
    <div className='home gray-container'>
      <div className='home-header'>Search To Find Your New Best Friend</div>
      <div className='filters-container center-column'>
        <div className='label'>What kind of pet are you looking for?</div>
        <SelectAutocomplete />
        <div className='label'>Enter a location to find nearby pets</div>
        <PlacesInput />
      </div>
      <div className='home-button pointer'>Search</div>
    </div>
  )
}

export default Home
