import { Map } from 'immutable';

const initial_state = Map({
    totalDeCreditos: 0,
    nombre: "Usuario"
})

export default function Perfil (state = initial_state, action) {
    switch(action.type) {
        case 'MODIFICAR_CREDITOS':
            return state.set('totalDeCreditos', action.payload);
        case 'CAMBIAR_NOMBRE':
            return state.set('nombre', action.payload);
        default:
            return state;
    }
}