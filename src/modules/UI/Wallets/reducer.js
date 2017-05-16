import { combineReducers } from 'redux'
import * as WALLETS_ACTION from './action'
import * as WALLET_LIST_ACTION from '../scenes/WalletList/action'

export const wallets = (state = {}, action) => {
  switch (action.type) {
    case WALLETS_ACTION.ADD_WALLET :
      return {
        ...state,
        [action.data.wallet.id]: action.data.wallet
      }

    case WALLET_LIST_ACTION.UPDATE_WALLET_LIST_ORDER :
      return state

    case WALLET_LIST_ACTION.TOGGLE_ARCHIVE_WALLET :
      let key = action.data.key
      let stateChanged = {
        ...state,
        [key]: {
          ...state[key],
          archived: !state[key].archived
        }
      }
      return stateChanged

    case WALLET_LIST_ACTION.COMPLETE_RENAME_WALLET :
      return { ...state, [action.key]: { ...state[action.key], name: action.input } }

    case WALLETS_ACTION.COMPLETE_DELETE_WALLET :
      delete state[action.data]
      return state

    default:
      return state
  }
}

// may need to sort
export const walletList = (state = [], action) => {
  switch (action.type) {
    case WALLETS_ACTION.UPDATE_WALLET_LIST :
      return action.data
    default:
      return state
  }
}

export const selectedWallet = (state = null, action) => {
  switch (action.type) {
    case WALLETS_ACTION.SELECT_WALLET :
      return action.data
    default:
      return state
  }
}

export const walletListOrder = (state = [], action) => {
  switch (action.type) {
    case WALLET_LIST_ACTION.UPDATE_WALLET_LIST_ORDER :
      return action.data
    default:
      return state
  }
}

export const walletsOld = combineReducers({
  wallets: wallets,
  walletList: walletList,
  walletListOrder: walletListOrder,
  selectedWallet: selectedWallet
})