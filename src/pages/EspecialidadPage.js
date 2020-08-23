import React from 'react';
import Sumillas from '../components/containers/Sumillas'
import Perfil from '../components/containers/Perfil'
import ModalElectivos from '../components/containers/ModalElectivos'
import { buscarDataEspecialidad } from '../actions'
import { connect } from 'react-redux'


class EspecialidadPage extends React.Component {
    constructor (props) {
        super(props);
        this.props.buscarDataEspecialidad(this.props.match.params.esp)
    }
    render() {
        return (
            <div>
                <Perfil />
                <Sumillas />
                <ModalElectivos />
            </div>
        )
    }
}

const mapDispatchToProps = {
    buscarDataEspecialidad
}

export default connect(null, mapDispatchToProps)(EspecialidadPage);