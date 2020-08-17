import { combineReducers } from 'redux-immutable';
import perfil from './perfil';
import data from './data';
import gruposElectivos from './gruposElectivos';
import modal from './modal';

const rootReducer = combineReducers({
    perfil,
    data,
    gruposElectivos,
    modal
});

export default rootReducer;