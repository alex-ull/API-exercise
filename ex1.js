let out = document.getElementById("out");

async function main() {
    let joke = await getAPI();
    await displayAPI(joke);
}

async function getAPI() {
    let url = `https://official-joke-api.appspot.com/random_joke`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
}

function displayAPI(joke) {
    let res = "";

    console.log(joke);
    res += `<p>${joke.setup}</p><p>${joke.punchline}</p>`
    out.innerHTML = res;
}