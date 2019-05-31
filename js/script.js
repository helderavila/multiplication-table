var n1 = window.document.getElementById('txt')
var res = window.document.getElementById('res')

function calcular(){
  for (i = 0; i < 11; i++) {
    var mult = n1.value * i
    res.innerHTML += (`${n1.value} x ${i} = ${mult}<br/> `)
  }
}