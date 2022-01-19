import './Home.css'
import SelectAutocomplete from '../SelectAutocomplete/SelectAutocomplete'
import PlacesInput from '../PlacesInput/PlacesInput'

const Home = () => {
  return (
    <div className='home gray-container'>
      <div className='home-header'>Search To Find Your New Best Friend</div>
      <div className='home-filters center-column'>
        <div className='label'>What kind of pet are you looking for?</div>
        <SelectAutocomplete />
        <div className='label'>Enter a location to find nearby pets</div>
        <PlacesInput />
      </div>
    </div>
  )
}

export default Home
