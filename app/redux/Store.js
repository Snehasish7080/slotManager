import {createStore, combineReducers} from 'redux';
import SlotDetailReducer from './SlotDetailRedux/Reducer';

const RootReducer = combineReducers({
  SlotDetailState: SlotDetailReducer,
});

const configureStore = () => createStore(RootReducer);

export default configureStore;
