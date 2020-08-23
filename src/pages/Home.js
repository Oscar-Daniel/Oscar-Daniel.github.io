import React from 'react';
import { cambiarNombre } from '../actions'
import Especialidad from '../components/presentationals/Especialidad'
import { connect } from 'react-redux'
import '../components/css/home.css'
import { Redirect } from 'react-router-dom'

const especialidades = [
    {
        id: "1",
        nombre: "Informática",
        direccion: "informatica",
        image: "https://images.vexels.com/media/users/3/157318/isolated/preview/2782b0b66efa5815b12c9c637322aff3-icono-de-la-computadora-de-escritorio-by-vexels.png"
    }, 
    {
        id: "2",
        nombre: "Industrial",
        direccion: "industrial",
        image: "https://thumbs.dreamstime.com/t/icono-del-ingeniero-industrial-131154079.jpg"
    }
]

class Home extends React.Component {
    state = {
        selecionado: '',
        nombre: '',
        infoCompleted: false
    }
    changeNombre = e => {
        this.setState({
            nombre: e.target.value
        })
    }
    onSelected = value => {
        this.setState({
            selecionado: value
        })
    }
    onBtnClick = e => {
        e.preventDefault()
        if(this.state.nombre && this.state.selecionado) {
            this.props.cambiarNombre(this.state.nombre)
            this.setState({infoCompleted: true})
        } else {
            alert("Es necesario elegir un Nombre y una Especialidad")
        }
    }
    render() {
        if(this.state.infoCompleted) return <Redirect to={`/${this.state.selecionado}`}/>
        return (
            <div className="Home">
                <form className="Home_form">
                    <h1>Wellcome!</h1>
                    <div className="Home_Fgroup">
                        <label>Nombre: </label>
                        <input type="text" name="nombre" className="Home_inputText" onChange={this.changeNombre} value={this.state.nombre} required/>
                    </div>
                    <div className="Home_Fgroup">
                        <label>Especialidad: </label>
                        <div className="Home_especialidades">
                            {
                                especialidades.map(esp => <Especialidad {...esp} seleccionado={this.state.selecionado} onSelected={this.onSelected} key={esp.id}/>)
                            }
                        </div>
                    </div>
                    <button onClick={this.onBtnClick} className="Home_btn">Consultar</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
  cambiarNombre
}

export default connect(null, mapDispatchToProps)(Home);