const button = document.querySelectorAll('.button');
const body = document.querySelector('body');
button.forEach((l) => {
  l.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'pink'){
      body.style.backgroundColor = e.target.id
    }
    else if(e.target.id === 'orange'){
      body.style.backgroundColor = e.target.id
    }
  })
});
