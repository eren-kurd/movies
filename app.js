const addMovieBtn = document.querySelector(".header h5")
const form = document.querySelector('.formm')
const errorForm = document.querySelector('.err')
const cancelBtn = document.querySelector('#cancel');
const submitBtn = document.querySelector('#submit')
const movieRating = document.querySelector('#rating')
const movieName = document.querySelector('#movie')
const movieImage = document.querySelector("#image")
const allMovies = document.querySelector('.movies')
const mode = document.querySelector('#mode')
const body = document.querySelector('body')

let movies = [];

addMovieBtn.addEventListener('click',()=>{
    form.classList.add('getForm')
})
cancelBtn.addEventListener('click',()=>{
    form.classList.remove('getForm')
    movieName.value = '';
    movieImage.value = '';
    movieRating.value = '';
})
submitBtn.addEventListener('click',()=>{
    if(movieName.value.trim() !=="" && movieImage.value.trim() !=="" && movieRating.value.trim() !==""){
        const movie = {
            name: movieName.value,
            image:movieImage.value,
            rating: movieRating.value,
            date: new Date().toLocaleDateString()
        }
        movies.push(movie);
        movieName.value = '';
        movieImage.value = '';
        movieRating.value = '';
        updateDOM();
        form.classList.remove('getForm');
    }else{
        errorForm.classList.add('getErr')
        setTimeout(()=>{
            errorForm.classList.remove('getErr')
        }, 3000)
    }
});

function updateDOM(){
    allMovies.innerHTML = ''
    movies.forEach((item,index)=>{
        const newElement = document.createElement('div')
        newElement.innerHTML = `
        <div class='movie'>
        <img src=${item.image} />
        <div>
            <h4>${item.name}</h4>
            <span>Rating: ${item.rating}</span>
            <span>${item.date}</span>
            <button id="deleteBtn">Delete</button>
            </div>
            </div>
        `
        allMovies.append(newElement);
        newElement.addEventListener('dblclick', ()=>{
            movies.splice(index, 1)
            updateDOM();
        });
        // const deleteBtn = document.querySelectorAll('#deleteBtn') // regay dwam
        // for (let i = 0; i < deleteBtn.length; i++) {
        //     deleteBtn[i].addEventListener('click',()=>{
        //         movies.splice(i, 1)
        //         updateDOM();
        //     })
            
        // }
    })
}


const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('getBody');
});