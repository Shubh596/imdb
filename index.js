async function searchMovie(){
    let searchMovie = document.getElementById("moviename").value;

    try{
        let url = `https://www.omdbapi.com/?t=${searchMovie}&apikey=45cc5160`;

    let res = await fetch(url);

    let data = await res.json()

    console.log(data)
    append(data)
    }
    catch(err){
        console.log(err)
    }


}

function append(data){
    let container = document.getElementById("conain")
        container.innerHTML=null;

    let div = document.createElement("div");

    let image = document.createElement("img")
        image.src = data.Poster

    let h1 = document.createElement("h1")
    h1.innerText = data.Title

    let p = document.createElement("p")
        p.innerText = data.Year

    let p1 = document.createElement("p")
    p1.innerText= data.Rated

        let p2 = document.createElement("p")
            p2.innerText = data.Released


    div.append(image, h1, p, p1, p2)
    container.append(div)
}