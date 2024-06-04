const express = require('express')
const app = express()
app.get('/sum', function(req, res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = a + b;
  res.send(sum.toString())
})
app.get('/interest', function(req, res){
  const p = parseInt(req.query.p);
  const r = parseInt(req.query.r);
  const t = parseInt(req.query.t);
  const Ir = (p*t*r)/100;
  const tootal = Ir + p;
  res.send({
    It : It,
    tootal : tootal,

  })
})
app.listen(3000)