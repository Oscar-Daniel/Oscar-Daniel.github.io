import React from 'react'
import Ciclo from './Ciclo'
import { connect } from 'react-redux'
import '../css/sumillas.css'

class Sumillas extends React.Component {
    render() {
        return (
            <div className="Sumillas">
                {
                    this.props.ciclos.map(ciclo => <Ciclo key={ciclo.get('id')} id={ciclo.get('id')}/>)
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    return  {
        ciclos: state.getIn(["data", "entities", "ciclos"]).toList(),
        cursos: state.getIn(['data', 'entities', "cursos"]).toList(),
    }
}

export default connect(mapStateToProps)(Sumillas);