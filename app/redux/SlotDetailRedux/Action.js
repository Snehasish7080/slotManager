import {CHANGE_SLOT_DETAIL} from './Types';

export const addSlot = (slot) => ({
  type: CHANGE_SLOT_DETAIL,
  payload: slot,
});
