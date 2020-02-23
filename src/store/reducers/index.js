import { SET_WEATHER } from '../actions';

const initialState = {
  city: {},
  weather: []
}

const cityReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_WEATHER:
      return Object.assign({}, state, {
        city: payload.city,
        weather: payload.list
      })
    default: 
      return state
  }
}

export default cityReducer;