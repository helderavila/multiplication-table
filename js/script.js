var n1 = window.document.getElementById('txt')
var res = window.document.getElementById('res')


function calculate(){
  res.innerHTML = (``)
        if (n1.value < 0){
          window.alert('[ERROR] Digite um valor acima de 0.')
              }else if(n1.value == 0){
                  window.alert('[ERROR] Digite um valor acima de 0')
                    }else if (n1.value >= 1000) {
                          window.alert('[ERROR] Digite um valor abaixo de 1000')
                          }else{
                                 for (i = 0; i < 11; i++) {
                                 var mult = n1.value * i
                                  res.innerHTML += (`${n1.value} x ${i} = ${mult}<br/> `)
                  }
             }
        }

function cleart(){
  res.innerHTML = (``)
}