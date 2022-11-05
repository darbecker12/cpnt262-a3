// Fetching api data
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    // Throw error if the response is not okay
    if(!response.ok){
      throw new Error(`${response.status}: ${response.statusText}`);
  
    }
    // Putting the character response into a useable variable
    const character = await response.json();
    let output = '';
    // Query Selector for the character class in the html file
    const characters = document.querySelector('.characters');
    // Selecting the button from the html file
    const btn = document.querySelector('.btn');
    btn.addEventListener("click", showCharacters);

    // Function to go through the character list
    function showCharacters() {
    for(let i = 0; i < 10; i++) {
      output += `
      <a href='https://www.wizardingworld.com/' target="_blank">
      <img src='${character[i].image}' alt='Photo of ${character[i].name}'><img>
      <h1>${character[i].name}</h1>
      <p>${character[i].house}</p>
      </a>`;
      characters.innerHTML = output;

    }
  }
  // Logging the error if it exists
  } catch(error) {
    console.error(error);    
    const errorText = document.querySelector('.error');
    errorText.innerHTML = "Error: Content Not Found";
  }
}

// Url of the api
fetchData('https://hp-api.herokuapp.com/api/characters')

