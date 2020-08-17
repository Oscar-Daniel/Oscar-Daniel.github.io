export const modificarCreditos = () => (dispatch, getState) => {
    const cursos = getState().getIn(["data", "entities", "cursos"])
    let totalDeCreditos = 0;
    cursos.forEach(curso => {
        if (Number(curso.get('aprobado'))) totalDeCreditos += Number(curso.get('creditos'))
    })
    dispatch({
        type: 'MODIFICAR_CREDITOS',
        payload: totalDeCreditos
    })
} 

export const modificarAprobado = (permitido, aprobado, id) => (dispatch) => {
    permitido = Number(permitido)
    aprobado = Number(aprobado)
    let aprob = "0"

    if(permitido) aprob = aprobado? "0" : "1"
    dispatch({
        type: 'MODIFICAR_APROBADO',
        payload: {
            aprob,
            id
        }
    })
}
export const estoyPermitido = (cursosReq, cursosSimultaneos, creditosReq, aprobado, id) => (dispatch, getState) => {
    const creditosTotales = getState().getIn(["perfil", "totalDeCreditos"]);
    let permitido = "1"

    if(Number(creditosReq)>creditosTotales || creditosReq==="") {
        permitido = "0"
    } else {
        if(cursosReq.size!==0) {
            cursosReq.forEach(codigo => {
                const cursoRequeridoAprobado = Number(getState().getIn(["data", "entities", "cursos", codigo, "aprobado"]));
                if(!cursoRequeridoAprobado) permitido = "0";
            })
        }
        if(cursosSimultaneos.size!==0 && permitido === "1") {
            cursosSimultaneos.forEach(codigo => {
                const cursosRequest = getState().getIn(["data", "entities", "cursos", codigo, "requisitos"]);
                if(cursosRequest.size!==0) {
                    cursosRequest.forEach(cod => {
                        const cursoReqAprobado = Number(getState().getIn(["data", "entities", "cursos", cod, "aprobado"]));
                        if(!cursoReqAprobado) permitido = "0";
                    })
                }
            })
        }
    }
    if(aprobado === "electivo") {
        dispatch({
            type: 'ELECTIVO_PERMITIDO',
            payload: {
                permitido,
                id
            }
        })
    } else {
        if(permitido === "0" && aprobado === "1") {
            dispatch({
                type: 'MODIFICAR_APROBADO',
                payload: {
                    aprob: "0",
                    id
                }
            })
        }
        dispatch({
            type: 'MODIFICAR_PERMITIDO',
            payload: {
                permitido,
                id
            }
        })
    }

}
export const abrirModal = (active, id) => (dispatch) => {
    // if(id==="")
    //     id= getState().getIn(["modal", "idDelElectivo"]);
    dispatch({
        type: 'ACTIVE_MODAL',
        payload: {
            active,
            id
        }
    })
}

// export const modificarValoresElectivo = (idElectivo) => (dispatch, getState) => {
//     const dataElectivo = getState().getIn(["gruposElectivos", "entities", "electivos", idElectivo]);
//     const nombre = dataElectivo.get('nombre');
//     const creditos = dataElectivo.get('creditos');
//     const creditosReq = dataElectivo.get('creditosReq');
//     const requisitos = dataElectivo.get('requisitos');
//     const simultaneo = dataElectivo.get('simultaneo');
//     const idPadre = getState().getIn(["modal", "idDelElectivo"]);
//     const nuevosDatos = {
//         nombre,
//         creditos,
//         creditosReq,
//         requisitos,
//         simultaneo
//     }
//     dispatch({
//         type: 'MODIFICAR_VALORES_ELECTIVO',
//         payload: {
//             id: idPadre,
//             nuevosDatos
//         }
//     })
// }

export const cambiarNombre = (nombre) => dispatch => {
    dispatch({
        type: 'CAMBIAR_NOMBRE',
        payload: nombre
    })
}