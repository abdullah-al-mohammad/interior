// document.getElementById("search").addEventListener("click", function(){
//     const inputContainer = document.getElementById("form");
//     const inputField = document.createElement('input');
//     console.log(inputField);
//     inputField.innerHTML = `
//     <input type="search" placeholder="Search" aria-label="Search">
//     `;
//     inputContainer.appendChild(inputField);
// })
const search = document.getElementById("search");
const clickEvent = search.addEventListener("click", function(){
    console.log('<input type="search" placeholder="Search" aria-label="Search">')
})


const home = document.getElementById('home');
const event = home.addEventListener('click',function(){
    console.log('Let Your Home Be Unique')
})