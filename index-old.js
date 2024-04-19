// Requiero el modulo http de node
const http = require('http')
// Llamo a la funcion createServer para levantar el servidor
http.createServer((req,res)=>{



 // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')


  //  res.writeHead(200, {'Content-Type':'application/csv'})

  res.writeHead(200,'Content-Type', 'application/json')

  console.log(req)

     const persona = {
         id:1,
         nombre:'Erwin'
     }
    // Envio una repuesta al cliente
  
    // res.write('id, Nombre\n')
    // res.write('1, Fernando\n')
    // res.write('2, Erwin\n')
    // res.write('3, Edward\n')
 
    // //Finalizo la respuesta
    // res.write('Hola Mundo')
    res.write(JSON.stringify(persona))
    res.end()
 // El servidor lo levanto en el puerto 8080, y el servidor escuchara las peticiones desde ese puerto
}).listen(8080)

console.log('Escuchando el puerto 8080')
