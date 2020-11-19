import {CHANGE_SLOT_DETAIL} from './Types';

const initialState = {
  SlotDetails: [],
};

const SlotDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SLOT_DETAIL:
      const findIndex = state.SlotDetails.findIndex(
        (i) => i.id === action.payload.id,
      );
      if (findIndex === -1) {
        return {
          ...state,
          SlotDetails: state.SlotDetails.concat(action.payload),
        };
      } else {
        const tempArray = state.SlotDetails;
        tempArray[findIndex] = action.payload;
        console.log('redux', tempArray);
        return {
          ...state,
          SlotDetails: tempArray,
        };
      }
    default:
      return state;
  }
};

export default SlotDetailReducer;
