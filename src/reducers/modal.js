import { fromJS } from 'immutable';

const initial_state = fromJS({
    isActive: false,
    idDelElectivo: ""
})

export default function data (state = initial_state, action) {
    switch(action.type) {
        case 'ACTIVE_MODAL':
            return state.merge({isActive: action.payload.active, idDelElectivo:  action.payload.id});
        default:
            return state;
    }
}