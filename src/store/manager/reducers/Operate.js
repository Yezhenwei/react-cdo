/*
 * 用户Reducer
 * Date 2016-12-15 
 * Author Yezhenwei
 */
import { PLUS, MINUS } from '../actions/Operate';

export const value = (state = 0, action) => {
  console.log(state)
  switch (action.type) {
    case PLUS:
      return state + 1
    case MINUS:
      return state - 1
    default:
      return state
  }
}