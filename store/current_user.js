import uuid from '../lib/uuid'

const initialState = {
  id: '58be23d3-9f35-4977-bf9f-25b0aaafae67',
  name: 'Alex'
}

export const currentUserReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}
