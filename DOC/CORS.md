# CORS

Cuando se abre una página web, cargar datos de servidores ajenos está, en teoría, estrictamente prohibido. Sin embargo, puede haber excepciones: si los administradores de ambas webs han acordado trabajar juntos, no hay por qué evitar el intercambio. En estos casos, el llamado **cross-origin resource sharing** (CORS) regula la colaboración.

El cors permite poder proteger nuestro servidor de una manera superficial. El mismo es un **middleware**.

https://www.npmjs.com/package/cors

### Para su uso

```
const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```