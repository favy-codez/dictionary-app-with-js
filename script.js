const input = document.getElementById("input");
const infoText = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audio =  document.getElementById("audio");

async function fetchAPI(word){
    // allows you to get the possible error from an API request
    try {
        infoText.style.display = "block";
        
        infoText.innerText = `Searching for the meaning of ${word}`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json())
        console.log(result);

        if (result.title) {
            meaningContainer.style.display = "block";
            title.innerText = word;
            meaning.innerText = "N/A";
            audio.style.display = "none";
        } else {
            infoText.style.display = "none";
            meaningContainer.style.display = "block";
            audio.style.display = "inline-flex";
            title.innerText = result[0].word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
        }

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