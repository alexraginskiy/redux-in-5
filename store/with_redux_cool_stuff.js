import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createSelector } from 'reselect'
import { lineItemsReducer, addLineItem, deleteLineItem, updateLineItemValues } from './line_items'
import { currentUserReducer } from './current_user'
import reduxLogger from 'redux-logger'

const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Example:
// - Compose multiple reducers into one store
// - Apply middleware to add more functionality
export const store = createStore(
  combineReducers({
    lineItems: lineItemsReducer,
    currentUser: currentUserReducer
  }),
  composeEnhancers(
    applyMiddleware(reduxLogger)
  )
)

// Selectors can be used to get derived data, storing only the minimal required in the store.
// Selectors are effecient, and only get executed when the inputs change, otherwise return
// cached values. You would typically put this somewhere near your reducers
export const lineItemsSelector = state => state.lineItems
export const lineItemBudgetsSelector = createSelector(
  lineItemsSelector,
  lineItems => lineItems.map(li => li.budget || 0)
)
export const totalBudgetSelector = createSelector(
  lineItemBudgetsSelector,
  budgets => budgets.reduce((acc, b) => acc + b, 0)
)
export const lineItemStartDatesSelector = createSelector(
  lineItemsSelector,
  lineItems => lineItems.reduce((acc, li) => {
    if (!li.startDate) return acc
    return [...acc, new Date(li.startDate)]
  }, [])
)
export const lineItemsEndDatesSelector = createSelector(
  lineItemsSelector,
  lineItems => lineItems.reduce((acc, li) => {
    if (!li.endDate) return acc
    return [...acc, new Date(li.endDate)]
  }, [])
)
export const earliestStartDateSelector = createSelector(
  lineItemStartDatesSelector,
  startDates => new Date(Math.min.apply(undefined, startDates))
)
export const latestEndDateSelector = createSelector(
  lineItemsEndDatesSelector,
  endDates => new Date(Math.max.apply(undefined, endDates))
)
