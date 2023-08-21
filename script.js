const input = document.getElementById("input");

async function fetchAPI(word){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res)=>res.json())
    console.log(result);
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