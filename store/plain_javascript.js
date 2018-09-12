import { lineItemsReducer, addLineItem, deleteLineItem, updateLineItemValues } from './line_items'

// Example:
let state;
state = lineItemsReducer()
console.log(0, state)

state = lineItemsReducer(state, addLineItem())
console.log(1, state)

state = lineItemsReducer(state, deleteLineItem('250694a4-0864-4df1-a6d0-c38fcf4ffaa8'))
console.log(2, state)

state = lineItemsReducer(state, updateLineItemValues(state[1].id, { startDate: '2/1/2019', endDate: '2/10/2019' }))
console.log(3, state)
