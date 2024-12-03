let out = document.getElementById("out");

async function main() {
    let gender = await getAPI();
    await displayAPI(gender);
}

async function getAPI() {
    let url = `https://api.genderize.io/?name=${document.getElementById("name").value}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
}

function displayAPI(gender) {
    let res = "";

    res += `<p>This individual is most likely a ${gender.gender}</p>`
    out.innerHTML = res;
}