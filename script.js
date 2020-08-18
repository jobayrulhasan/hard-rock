document.getElementById("input-form").addEventListener('submit', lyrics);
function lyrics(e) { 
    const name = document.getElementById('search-box').Value;
fetch(`https://api.lyrics.ovh/suggest/${name}`)
.then(res => res.json())
.then(data => displayData(data))
.catch(error => console.log(error))

e.stopDefault();

}


function displayData(displayData) {
    let data = displayData.data
    console.log(data)
    let list = [];
    for (let i = 0; i < 10 ; i++) {
        let item  = {
            title: data[i].title,
            artistName: data[i].artist.name
        }
        list.push(item);
    }
    console.log(list);
    let display = document.getElementById("display-result");
    for (let i = 0; i < list.length; i++) {
        const { title, artistName, } = list[i];
        display.innerHTML +=
            `<div class="col-md-9 ">
                <h3 class="lyrics-name"><span id="title">${title}</span></h3>
                <p class="author lead">Artist Name: <span id="artistName">${artistName}</span></p>
            </div>
            <div class ="col-md-3 text-md-right text-center">
                <a href="#" onclick="showData(${title},${artistName})" class="btn btn-success">Get Lyrics</a>
            </div>
            `
    }

}