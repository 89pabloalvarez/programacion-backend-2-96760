import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())
// app.get('/test', (req, res) => {
//   res.send('Hello World!')
//   req.send('Hello World!')
// })

app.get('/seteo-una-cookie', (req, res) => {
  res.cookie("nombre_de_la_cookie", "valor_de_mi_cookie", {maxAge: 6000})
  res.cookie("nombre_de_la_cookie2", "valor_de_mi_cookie2", {maxAge: 6000})
  res.send("Cookie seteada")
})

app.get('/leer-una-cookie', (req, res) => {
    console.log("aca esta la cookie recuperada: ", req.cookies.nombre_de_la_cookie)
    res.send(req.cookies.nombre_de_la_cookie)
})

app.listen(8080, () => {
  console.log('Example app listening on port 3000!')
})

export default app