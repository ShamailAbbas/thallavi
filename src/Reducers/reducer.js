const initialState = {
  Feeds: [],
  Loading: true,
  Busy: false,
}
const reducer = (state = initialState, action) => {
  if (action.type === 'FETCH') {
    return {
      ...state,
      Feeds: action.payload,
      Loading: false,
    }
  }
  if (action.type === 'LIKED') {
    const tempFeeds = state.Feeds.map((items) => {
      if (items._id === action.payload)
        items = { ...items, like: items.like + 1 }
      return items
    })
    return { ...state, Feeds: tempFeeds }
  }
  if (action.type === 'DELETE') {
    const tempFeeds = state.Feeds.filter(
      (items) => items._id !== action.payload
    )
    return { ...state, Feeds: tempFeeds }
  }
  if (action.type === 'BUSY') {
    return {
      ...state,
      Busy: !state.Busy,
    }
  }
  return state
}

export default reducer
