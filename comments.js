
let textarea= document.querySelectorAll('textarea');

document.querySelector('form').addEventListener('submit', (evt)=>{
    evt.preventDefault();
    saveToLocalStorage();
    
    let comment = textarea.value;
    document.querySelector('#container').innerHTML += '<br />' + comment;
    textarea.value='';
    textarea.focus();

    let localComments = localStorage.getItem('comments');
    localStorage.setItem('comments', localStorage + '<br />' + comment);
});

document.querySelector('form').addEventListener('reset', (evt) => {
    evt.preventDefault();
    readFromLocalStorage();
})

/*function saveToLocalStorage(
    let value= document.querySelectorAll('#name').value;
    localStorage.setItem('username',value)
)*/