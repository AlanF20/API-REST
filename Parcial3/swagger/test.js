import chai from 'chai'
import chaiHttp from 'chai-http'
import { server } from './index.js'

chai.use(chaiHttp)
const expectChido = chai.expect
describe('Endpoint de alumnos', function(){
  it('regresa una respuesta con status de 200', function(){
    chai.request(server)
      .get('/alumnos')
      .end(function(err, res) {
        expectChido(res).to.have.status(200)
      })
  })
  it('regresa un respuesta de tipo json', function(){
    chai.request(server)
      .get('/alumnos')
      .end(function(err,res){
        expectChido(res).to.be.json
      })  
  })  
})
