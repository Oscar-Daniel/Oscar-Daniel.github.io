import { schema, normalize } from 'normalizr';
import data from './electivos.json'

const electivo = new schema.Entity("electivos", {}, {
    idAttribute: 'codigo',
});
const grupoElectivo = new schema.Entity("gruposElectivos", {cursos: new schema.Array(electivo)}, {
    idAttribute: 'grupoElectivo',
})
const gruposElectivos = {gruposElectivos: new schema.Array(grupoElectivo)}


const electivosNormalizados = normalize(data, gruposElectivos)

console.log('electivosNormalizados', electivosNormalizados)

export default electivosNormalizados;