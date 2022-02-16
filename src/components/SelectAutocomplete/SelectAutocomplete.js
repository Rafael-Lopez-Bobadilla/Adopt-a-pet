import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'

const SelectAutocomplete = () => {
  return (
    <div className='selectAutocomplete full-width filter'>
      <input className='full-width' />
      <div className='filter-icon'>
        <KeyboardArrowDownRoundedIcon style={{ fontSize: '35px' }} />
      </div>
    </div>
  )
}

export default SelectAutocomplete