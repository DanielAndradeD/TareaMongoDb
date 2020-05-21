var mongoose = require('mongoose');
var Libros= require('./models/libros.js');

mongoose.connect('mongodb+srv://daniel_andrade:meta11ica.@cluster0-pqaaf.gcp.mongodb.net/Libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));


function nuevoLibro( nisbn,titu, nombreAutor, apellidoAutor, edit, anio){
  var lib=Libros({
    isbn: nisbn,
    titulo: titu,
    autor: {
      nombre: nombreAutor,
      apellido: apellidoAutor
    },
    editorial: edit,
    año: anio
  })

  lib.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log("------------------------OK ---------------------------");
      console.log(data);
    }
  });
}

function nuevosLibros(){
  var libro=[
  {isbn:9789626340578, titulo: "Historia de dos ciudades", autor:{nombre: "Charles", apellido: "Dickens"},editorial:"Chapman & Hall", año:1859},
  {isbn:9781501259319, titulo: "Lo que el viento se llevó", autor:{nombre: "Margaret", apellido: "Mitchell"},editorial:"Macmillan Publishers", año:1936},
  {isbn:9781559273619, titulo: "El nombre de la rosa", autor:{nombre: "Umberto", apellido: "Eco"},editorial:"Bompiani", año:1982},
  {isbn:9781400156337, titulo: "Orgullo y prejuicio", autor:{nombre: "Jane", apellido: "Austen"},editorial:"Thomas Egerton", año:1813},
  {isbn:9780792753384, titulo: "El lobo estepario", autor:{nombre: "Hermann", apellido: "Hesses"},editorial:"S. Fischer Verlag", año:1927},  
  {isbn:9781841598994,titulo: "En busca del tiempo perdido", autor:{nombre: "Marcel", apellido: "Proust"},editorial:"Éditions Grasset", año:1927}, 
  {isbn:9781400132171, titulo: "Don Quijote de la mancha", autor:{nombre: "Miguel", apellido: "De Cervantes"},editorial:"Francisco de Robles", año:1605},  
  {isbn:9780786119349, titulo: "Moby Dick", autor:{nombre: "Herman", apellido: "Melville"},editorial:"Richard Bentley", año:1851},


];

Libros.collection.insert(libro,function(err,data){
  if (err) {
    console.log("------------------------ERROR --------------------------");
  }else {
    console.log("------------------------OK ---------------------------");
    console.log(data);
  }
});
}

function findbytitulo(titu){
  Libros.find({titulo: titu},function(err,documentos){
    console.log(documentos);
});
}

function findbyIsbn(numIsbn){
  Libros.find({isbn:numIsbn},function(err,documentos){
    console.log(documentos);
});
}

function cambiarTitulobyIsbn(numIsbn, titu){
  Libros.findOneAndUpdate({isbn:numIsbn},
    {titulo:titu},function(err,data){
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
}

function main() {
  nuevosLibros();
}

main();    // ejecutamos main
