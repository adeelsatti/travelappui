import {COUNTER_CHANGE} from '../constants';

export default function changeCounter(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
