const submitButton = document.querySelector('#submitButton');
const story = document.querySelector('#madLibStory')
const form = document.querySelector('#madLibForm')

function updatePlaceholder() {
    const input = document.getElementById(id)
    const placeholder = document.getElementsByClassName(id)
    for (let index = 0; index < placeholder.length; index++) {
        const placeholder = placeholder[index];
        placeholder.innerText = input.value;
    }
}

//add event listener 
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('submit!')
    //replace placeholders
      //select input 
    updatePlaceholder('animal')
    updatePlaceholder('country')
    updatePlaceholder('pluralNoun')
    updatePlaceholder('food')
    updatePlaceholder('device')
    updatePlaceholder('noun')
    updatePlaceholder('adjective')
})
//show story
story.style.display = 'block';
//hide form
form.style.display = 'none';


//find restart button
const restartButton = 
restartButton.addEventListener('click', function(event) {
    event.preventDefault();
    showForm();
    form.reset
})



