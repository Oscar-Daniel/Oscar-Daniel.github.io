import { schema, normalize } from 'normalizr';
import data from './industrial/index.json'

const curso = new schema.Entity("cursos", {}, {
    idAttribute: 'codigo',
});
const ciclo = new schema.Entity("ciclos", {cursos: new schema.Array(curso)})
const ciclos = {ciclos: new schema.Array(ciclo)}

const dataNormalizada = normalize(data, ciclos)

// console.log('dataNormalizada', dataNormalizada)

export default dataNormalizada;