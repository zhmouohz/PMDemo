import { createReducer } from 'redux-act'
import * as actions from './actions'
import { combineReducers } from 'redux'

const newMsgReducer = createReducer(
  {
    [actions.newMsg]: (state, payload) => {
      return [...state, payload]
    },
  },
  []
)

const newErrRateMsg = createReducer(
  {
    [actions.newErrRateMsg]: (state, payload) => {
      return payload
    },
  },
  {}
)

export default combineReducers({
  newMsg: newMsgReducer,
  newErrRateMsg: newErrRateMsg,
})
