import React from 'react'
import ReactDOM from 'react-dom'
import '../css/modal.css'
import { connect } from 'react-redux'
import { abrirModal } from '../../actions'
import Electivo from './Electivo'


class ModalElectivos extends React.Component {
    render() {
        if(this.props.isActive) {
            return ReactDOM.createPortal(
                <div className="ModalElectivos_container">
                    <div className="ModalElectivos">
                        <div onClick={()=>this.props.abrirModal(false,"")} className="Modal_Xbutton">X</div>
                        <h2>{this.props.nombreDelGrupo}</h2>
                        <div className="ModalElectivos_AlmacenContainer">
                            <div className="ModalElectivos_Almacen">
                                {
                                    this.props.listaElectivos.map(codigo => <Electivo key={codigo} id={codigo}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>,
            document.getElementById('modal'));
        } else return null;
    }
}


function mapStateToProps (state) {
    const idDelElectivo = state.getIn(["modal", "idDelElectivo"])
    const nameGroup = state.getIn(["data", "entities", "cursos", idDelElectivo, "nombre"])
    // console.log(nameGroup, idDelElectivo)
    // console.log(state.getIn(["data", "entities", "cursos", idDelElectivo]))

    return  {
        isActive: state.getIn(["modal", "isActive"]),
        listaElectivos: state.getIn(["gruposElectivos", "entities", "gruposElectivos", nameGroup, "cursos"]),
        nombreDelGrupo: nameGroup
    }
}
const mapDispatchToProps = {
    abrirModal
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalElectivos);
// export default ModalElectivos;