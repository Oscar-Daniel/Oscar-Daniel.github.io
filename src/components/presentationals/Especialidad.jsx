import React from 'react'

function Especialidad ({direccion, nombre, onSelected, image, seleccionado}) {
    let selec = ''
    if(direccion === seleccionado) selec = '0px 0px 18px 1px'
    return (
        <div onClick={()=> onSelected(direccion)} className="Especialidad" style={{boxShadow: selec}}>
            <strong>{nombre}</strong>
            <img src={image} alt=""/>
        </div>
    )
}

export default Especialidad