import React from 'react'
import Curso from './Curso'
import { connect } from 'react-redux'

class Ciclo extends React.Component {
    
    calcularCreditosPorCiclo = () => {
        let totalCreds = 0;
        this.props.cursos.forEach(cursoCod => {
            const curso = this.props.dataCursos.get(cursoCod)
            if(Number(curso.get("aprobado"))) totalCreds += Number(curso.get("creditos"));
        });
        return totalCreds;
    }

    render() {
        const totalCreds = this.calcularCreditosPorCiclo()
        return (
            <div>
                <h2>Ciclo {this.props.id}</h2>
                <h3>{totalCreds}</h3>
                {
                    this.props.cursos.map(curso => <Curso key={curso} id={curso}/>)
                }
            </div>
        )
    }
}

function mapStateToProps (state, props) {
    return  {
        cursos: state.getIn(["data", "entities", "ciclos", props.id, "cursos"]),
        dataCursos: state.getIn(["data", "entities", "cursos"]),
    }
}

export default connect(mapStateToProps)(Ciclo);