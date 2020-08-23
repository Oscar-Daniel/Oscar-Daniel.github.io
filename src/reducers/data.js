import { fromJS } from 'immutable';
import datos from '../data/dataNormalizada'

const initial_state = fromJS({
    ...datos
})

export default function data (state = initial_state, action) {
    switch(action.type) {
        case 'MODIFICAR_PERMITIDO':
            return state.setIn(['entities', 'cursos', action.payload.id, 'permitido'], action.payload.permitido)
        case 'MODIFICAR_APROBADO':
            return state.setIn(['entities', 'cursos', action.payload.id, 'aprobado'], action.payload.aprob)
        case 'DATA':
            const data = action.payload
            return state.set('entities', fromJS(data.entities))
        // case 'MODIFICAR_VALORES_ELECTIVO':
        //     const {nombre, creditos, creditosReq, requisitos, simultaneo } = action.payload.nuevosDatos

        //     return state.mergeIn(['entities', 'cursos', action.payload.id], {nombre, creditos, creditosReq, requisitos, simultaneo})
        default:
            return state;
    }
}