
   function active(myid){
    const selected = document.getElementById(myid)
    const one = document.getElementById('flex')
    const two = document.getElementById('flexone')
    const three = document.getElementById('flextwo')
    const four = document.getElementById('flexthree')
    const five = document.getElementById('flexfour')
    const six = document.getElementById('flexfive')
    const seven = document.getElementById('flexsix')
    const eight = document.getElementById('flexseven')

 one.style.background = 'white';
 two.style.background = 'white';
 two.style.color = 'black';
 three.style.background = 'white';
 four.style.background = 'white';
 five.style.background = 'white';
 six.style.background = 'white';
 seven.style.background = 'white';
 eight.style.background = 'white';
 one.style.color = 'black';
 three.style.color = 'black';
 four.style.color = 'black';
 five.style.color = 'black';
 six.style.color = 'black';
 seven.style.color = 'black';
 eight.style.color = 'black';
    selected.style.background = '#A91F2F';
    selected.style.width = '85%';
    selected.style.borderRadius = '5px';
    selected.style.padding = '25px';
    selected.style.color = 'white';
   }

