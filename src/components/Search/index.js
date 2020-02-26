import React, { useState } from 'react';
import searchIcon from '../../icons/search.png';
import { 
  InputAdornment,
  IconButton
} from '@material-ui/core';
import StyledInput from './Styled';

const Search = ({ placeholder, onClick }) => {
  const [ value, setValue ] = useState("");
  const handleEnterPress = ( event ) => {
    if(event.key === 'Enter'){
      onClick(value);
    }
  }


  return (
    <StyledInput
      value={value}
      placeholder={placeholder}
      onChange={( event ) => setValue(event.target.value)}
      onKeyPress={handleEnterPress}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={() => onClick(value)}
            edge="end"
          >
            <img src={searchIcon} alt="search icon"/>
          </IconButton>
        </InputAdornment>
      }
    />
  )
}

export default Search;