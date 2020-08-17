import React from 'react'
import '../css/electivo.css'
import { connect } from 'react-redux'
import { estoyPermitido, abrirModal } from '../../actions'
// import { estoyPermitido, modificarValoresElectivo, abrirModal } from '../../actions'

function colorCreditos(color) {
    switch(color) {
        case "#ED4040":
            return "#FD2A2A";
        case "#40A1ED":
            return "#1D24D2";
        default:
            return "";
    }
}

class Electivo extends React.Component {
    state = {
        color: "",
        colorCred: ""
}

    handleClick = () => {
        // this.props.modificarValoresElectivo(this.props.id)
        this.props.abrirModal(false,"")
    }

    render() {
        this.props.estoyPermitido(this.props.requisitos, this.props.simultaneo, this.props.creditosReq, "electivo", this.props.id)
        this.state.color = (Number(this.props.permitido)===1)? "#40A1ED" : "#ED4040";
        this.state.colorCred = colorCreditos(this.state.color)
        return (
            <div className="Electivo" onClick={this.handleClick} style={{background: `${this.state.color}`}}>
                    <h5>{this.props.codigo}</h5>
                    <h4>{this.props.nombre}</h4>
                    <h5>{this.props.creditos}</h5>
                    <div className="Electivo_credReq" style={{background: this.state.colorCred}}>
                            { (Number(this.props.creditosReq)!==0) && this.props.creditosReq + "cdts."}
                            { (Number(this.props.requisitos.size)!==0) && this.props.requisitos.map((codigo, index) => {
                                const comma = (index<this.props.requisitos.size-1)? ', ' : ' ';
                                return `${codigo}${comma} `;
                                })
                            }
                            { (Number(this.props.simultaneo.size)!==0) && this.props.simultaneo.map((codigo, index) => {
                                const comma = (index<this.props.simultaneo.size-1)? ', ' : '';
                                return `[${codigo}${comma}]`;
                                })
                            }
                    </div>
            </div>
        )
    }
}


function mapStateToProps (state, props) {
    const data = state.getIn(["gruposElectivos", "entities", "electivos", props.id])
    return  {
        codigo: data.get('codigo'),
        nombre: data.get('nombre'),
        creditos: data.get('creditos'),
        creditosReq: data.get('creditosReq'),
        requisitos: data.get('requisitos'),
        simultaneo: data.get('simultaneo'),
        permitido: data.get('permitido')
    }
}
const mapDispatchToProps = {
    estoyPermitido,
    // modificarValoresElectivo,
    abrirModal
}
export default connect(mapStateToProps, mapDispatchToProps)(Electivo);