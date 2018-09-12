import uuid from '../lib/uuid'

// Redux is more pattern than a library or framework.
// Core concepts pull from functional programming and immutable data
// There are three main concepts:

// 1. State as a plain JavaScript object
const initialState = [
  {
    id: 'ccf731e9-0b5e-4ac0-8420-6b5bfd80a119',
    name: 'Line item 1',
    startDate: '1/1/2019',
    endDate: '1/10/2019',
    rateType: 'cpm',
    rate: 2.25,
    budget: 1000
  },
  {
    id: '250694a4-0864-4df1-a6d0-c38fcf4ffaa8',
    name: 'Line item 2',
    startDate: '1/11/2019',
    endDate: '1/20/2019',
    rateType: 'cpm',
    rate: 3,
    budget: 1500
  }
]


// 2. Actions describe changes to state, have a type and may include a payload
//    Action creators are functions that return the actions
export function addLineItem() {
  return { type: 'ADD_LINE_ITEM' }
}

export function deleteLineItem(lineItemId) {
  return { type: 'DELETE_LINE_ITEM', payload: {lineItemId} }
}

export function updateLineItemValues(lineItemId, values) {
  return { type: 'UPDATE_LINE_ITEM_VALUE', payload: {lineItemId, values} }
}


// 3. Reducers are functions that returns a new version of the state
//    with changes applied.
//    Function signature is state, action => newState
//    All changes return NEW objects, never mutate the state that was passed
export const lineItemsReducer = (state = initialState, action = {}) => {
  const {payload} = action
  switch (action.type) {
    case 'ADD_LINE_ITEM': {
      return [...state, { id: uuid() }]
    }
    case 'DELETE_LINE_ITEM': {
      return state.filter(li => li.id !== payload.lineItemId)
    }
    case 'UPDATE_LINE_ITEM_VALUE': {
      return state.map(li => {
        if (li.id === payload.lineItemId) {
          return { ...li, ...payload.values }
        }
        else {
          return li
        }
      })
    }
    default:
      return state;
  }
}
