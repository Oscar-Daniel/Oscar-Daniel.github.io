import React from 'react'
import { connect } from 'react-redux'
import perfilImage from '../../profile.jpg'
import '../css/perfil.css'

class Perfil extends React.Component {
    render() {
        return (
            <div className="Perfil">
                <img src={perfilImage} alt="profile.jpg" className="Perfil_img"/>
                <div className="Perfil_datos">
                    <h1>{this.props.nombre}</h1>
                    <h2>Creditos totales: {this.props.creditos}</h2>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        creditos: state.getIn(["perfil", "totalDeCreditos"]),
        nombre: state.getIn(["perfil", "nombre"])
    }
}

export default connect(mapStateToProps)(Perfil);