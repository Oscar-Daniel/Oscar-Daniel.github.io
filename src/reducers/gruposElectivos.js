import { fromJS } from 'immutable';
import datos from '../data/electivosNormalizados'

const initial_state = fromJS({
    ...datos
})

export default function gruposElectivos (state = initial_state, action) {
    switch(action.type) {
        case 'ELECTIVO_PERMITIDO':
            return state.setIn(['entities', 'electivos', action.payload.id, 'permitido'], action.payload.permitido)
        default:
            return state;
    }
}