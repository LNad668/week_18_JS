
let textarea = document.querySelector('textarea');

document.querySelector('form').addEventListener('submit', (evt)=>{
    evt.preventDefault();
    saveToLocalStorage();
    
    let comment = textarea.value;
    document.querySelector('#container').innerHTML += '<br />' + comment;
    textarea.value = '';
    textarea.focus();

    let value = document.querySelector('#name').value;
    localStorage.setItem('username', value);

    let valueComm = document.querySelectorAll('#container').values;
    

    localStorage.setItem(valueComm, document.querySelector('#container').innerHTML);
   // let localComments = localStorage.getItem('comment');
   // localStorage.setItem('comment', localStorage + '<br />' + comment);
});

document.querySelector('form').addEventListener('reset', (evt) => {
    evt.preventDefault();
    readFromLocalStorage();
})

function saveToLocalStorage(){
    let value= document.querySelectorAll('#name').value;
    localStorage.setItem('username',value)
}
    
function readFromLocalStorage(){
    let username= localStorage.getItem('username');
    document.querySelector('#name').value = username;
}

readFromLocalStorage();
saveToLocalStorage();