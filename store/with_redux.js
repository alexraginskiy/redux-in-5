import { createStore} from 'redux'
import { lineItemsReducer, addLineItem, deleteLineItem, updateLineItemValues } from './line_items'

// Example:
// Redux creates a store
const store = createStore(lineItemsReducer)

// Redux allows us to subscribe to actions on the store
let logCount = 0;
const unsubscribe = store.subscribe(() =>
  console.log(logCount++, store.getState())
)

// Dispatch actions to the store
// This is the only way to trigger state change
store.dispatch(addLineItem())
store.dispatch(deleteLineItem('250694a4-0864-4df1-a6d0-c38fcf4ffaa8'))
store.dispatch(updateLineItemValues(store.getState()[1].id, { startDate: '2018-2-1', endDate: '2018-2-10' }))

unsubscribe()
