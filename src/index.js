document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector( "form" );
  let inputField = form.querySelector( "#new-task-description" );
  let ul = document.querySelector( '#tasks' );
  let submitBtn = form.querySelector( '#submit' );
  
  form.addEventListener('submit', (event) =>{
    //console.log(event); 
    event.preventDefault();
    let li = document.createElement( 'li' );
    ul.appendChild( li );
    li.textContent = inputField.value;
    form.reset();

  })
  

});
