const input = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");

async function fetchAPI(word){
    // allows you to get the possible error from an API request
    try {
        infoText.style.display = "block";
        infoText.innerText = `Searching for the meaning of ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json())
        console.log(result);
        infoText.style.display = "none";
    } catch (error) {
        console.log(error);
    }
}

input.addEventListener("keyup", (e)=> {
        // console.log anything we enter 
    // console.log(e.target.value);
        // shows the key e.g enter, backspace
    // console.log(e.key);
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value)
    }
})