let links = document.querySelectorAll('.links');

links.forEach(link =>{
    link.addEventListener('click', ()=>{
        links.forEach(item => item.classList.remove('active'))
        link.classList.add('active')
    })
})


// toggle navbar

const toggleeBTn = document.querySelector('.toggle-btn');
const ul = document.querySelector('.nav-link-conatiner');

toggleeBTn.addEventListener('click', ()=>{
    toggleeBTn.classList.toggle('active');
    ul.classList.toggle('active');
})