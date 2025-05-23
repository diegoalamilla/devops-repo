
const express = require('express')
const {Alumnos} = require('./Models/models')
const {Profesores} = require('./Models/models')

const app = express()
const port = 3000

const alumno1 = new Alumnos("Diego Alamilla", "21216409");
const alumno2 = new Alumnos("Valentina Ortiz", "1700092");
const alumno3 = new Alumnos("John Doe", "21212442");
const alumno4 = new Alumnos("Aloy", "21524625");
const alumno5 = new Alumnos("Link", "233254254");

const profesor1 = new Profesores("Joel Miller", "1");
const profesor2 = new Profesores("Ellie Williams", "2");
const profesor3 = new Profesores("Marcus Fenix", "3");
const profesor4 = new Profesores("Eduardo Rodriguez", "4");
const profesor5 = new Profesores("Master Chief", "5");

const alumnosList = [alumno1, alumno2, alumno3, alumno4, alumno5];


const profesoresList = [profesor1,profesor2,profesor3, profesor4, profesor5];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/alumnos', (req, res) => {
    res.send(alumnosList)
    console.log("Petition to retrieve alumnos")
})

app.get('/profesores', (req, res) => {
    res.send(profesoresList)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
