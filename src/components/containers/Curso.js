import React from 'react'
import '../css/curso.css'
import { connect } from 'react-redux'
import { modificarCreditos, modificarAprobado, estoyPermitido, abrirModal } from '../../actions'

function retornarColor(permitido, aprobado) {
    permitido = Number(permitido)
    aprobado = Number(aprobado)
    if(permitido && aprobado) return "#00DD7D"; // green
    else if(permitido && !aprobado) return "#40A1ED"; // blue
    else return "#ED4040"; // red
}
function colorCreditos(color) {
    switch(color) {
        case "#00DD7D":
            return "#22C022";
        case "#40A1ED":
            return "#1D24D2";
        default:
            return "#FD2A2A";
    }
}

class Curso extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "",
            credColor: "",
            modalActive: false
        };
    }
    handleClick = () => {
        this.props.modificarAprobado(this.props.permitido, this.props.aprobado, this.props.id)
        this.props.modificarCreditos()
    }
    render() {
        this.props.estoyPermitido(this.props.requisitos, this.props.simultaneo, this.props.creditosReq, this.props.aprobado, this.props.id)
        this.state.color = retornarColor(this.props.permitido, this.props.aprobado)
        this.state.credColor = colorCreditos(this.state.color)
        return (
            <div className="Curso" >
                <div className="Curso_datos" style={{background: `${this.state.color}`}} onClick={this.handleClick}>
                    {
                        (Number(this.props.electivo)===0) && <h5>{this.props.codigo}</h5>
                    }
                    <h4>{this.props.nombre}</h4>
                    <h5>{this.props.creditos}</h5>
                {
                    (Number(this.props.creditosReq)!==0) && 
                    <div className="Curso_credReq" style={{background: `${this.state.credColor}`}}><strong>{this.props.creditosReq}</strong> cdts.</div>
                }
                </div>
                {
                    (Number(this.props.electivo)!==0) && 
                    <div className="Curso_esElectivo_E" 
                        style={{'border': `4px solid ${this.state.credColor}`}} 
                        onClick={()=>this.props.abrirModal(true, this.props.id)}> E </div>
                }
            </div>
        )
    }
}


function mapStateToProps (state, props) {
    const data = state.getIn(["data", "entities", "cursos", props.id])
    const totalCreditos = state.getIn(["perfil", "totalDeCreditos"])
    return  {
        codigo: data.get('codigo'),
        nombre: data.get('nombre'),
        creditos: data.get('creditos'),
        creditosReq: data.get('creditosReq'),
        aprobado: data.get('aprobado'),
        permitido: data.get('permitido'),
        requisitos: data.get('requisitos'),
        simultaneo: data.get('simultaneo'),
        electivo: data.get('electivo'),
        modalIsActive: state.getIn(["modal", "isActive"]),
        totalCreditos
    }
}
const mapDispatchToProps = {
    modificarCreditos,
    modificarAprobado,
    estoyPermitido,
    abrirModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Curso);