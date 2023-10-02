let peter = document.getElementById('peterpp')
let okiki = document.getElementById('okikipp')
let bolu = document.getElementById('bolupp')
let akin = document.getElementById('akinpp')
let salam = document.getElementById('salampp')



peter.addEventListener('click', ()=>{
  setTimeout(()=>{
    document.body.style.backgroundImage = "url('Images/Mr Peter.jpeg')";
    document.getElementById('all').style.display= 'none';
    document.getElementById('all2').style.display="none"
  }, 10)
  console.log('dey');
})
okiki.addEventListener('click', ()=>{
  setTimeout(()=>{
    document.body.style.backgroundImage = "url('Images/okiki.jpeg')";
    document.getElementById('all').style.display= 'none';
    document.getElementById('all2').style.display="none"
  }, 10)
  console.log('dey');
})
bolu.addEventListener('click', ()=>{
  setTimeout(()=>{
    document.body.style.backgroundImage = "url('Images/Mr Bolu.jpeg')";
    document.getElementById('all').style.display= 'none';
    document.getElementById('all2').style.display="none"
  }, 10)
  console.log('dey');
})
akin.addEventListener('click', ()=>{
  setTimeout(()=>{
    document.body.style.backgroundImage = "url('student (1).jpeg')";
    document.getElementById('all').style.display= 'none';
    document.getElementById('all2').style.display="none"
  }, 5)
  console.log('dey');
})
salam.addEventListener('click', ()=>{
  setTimeout(()=>{
    document.body.style.backgroundImage = "url('student (2).jpeg')";
    document.getElementById('all').style.display= 'none';
    document.getElementById('all2').style.display="none"
  }, 100)
  console.log('dey');
  // function pauseBtn(){
  //   clearTimeout(clock)
  //   console.log('hey');
  // }
  // pauseBtn()
})


