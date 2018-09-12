import { createReducer } from 'redux-act'
import * as actions from './actions'
import { combineReducers } from 'redux'
import consts from '../../consts'

const isMsg = payload => {
  if (payload.amt) {
    return true
  } else return false
}

const iswarnMsg = payload => {
  if (payload.warnType) {
    return true
  } else return false
}

const newMsgReducer = createReducer(
  {
    [actions.newMsg]: (state, payload) => {
      const newState = {}
      if (isMsg(payload)) {
        state.msg = [...state.msg, payload]
        if (state.msg.length > consts.size) {
          state.msg = state.msg.slice(-1 * consts.size)
        }
      } else if (iswarnMsg(payload)) {
        state.warnMsg = [...state.warnMsg, payload]
        if (state.warnMsg.length > consts.size) {
          state.warnMsg = state.warnMsg.slice(-1 * consts.size)
        }
      } else {
        state.sumMsg = [...state.sumMsg, ...payload]
        if (state.sumMsg.length > consts.size) {
          state.sumMsg = state.sumMsg.slice(-1 * consts.size)
        }
      }
      newState.msg = state.msg
      newState.warnMsg = state.warnMsg
      newState.sumMsg = state.sumMsg
      console.log('reducer', newState)
      return newState
    },
  },
  { msg: [], sumMsg: [], warnMsg: [] }
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
