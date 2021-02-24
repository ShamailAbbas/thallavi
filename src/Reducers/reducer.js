const initialState = {
  Loading: true,
  Busy: false,
  Details: [],
  AllRooms: [],
  user: localStorage.user,
  userrole: localStorage.userrole,
}
const reducer = (state = initialState, action) => {
  if (action.type === 'BUSY') {
    return {
      ...state,
      Busy: !state.Busy,
    }
  }
  if (action.type === 'ROOMDETAIL') {
    return {
      ...state,
      Details: action.payload,
    }
  }
  if (action.type === 'FETCHROOMS') {
    return {
      ...state,
      AllRooms: action.payload,
      Loading: false,
    }
  }

  return state
}

export default reducer
