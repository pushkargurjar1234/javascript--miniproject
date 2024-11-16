let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let Result = document.getElementById("result");

let Getmovie = () => {
  let movieName = movieNameRef.value;
  let key = "84a65e6e";
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.length <= 0) {
    Result.innerHTML = `<h3 class="msg"> Please enter a Movie name </h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if(data.Response == "True"){
            Result.innerHTML = `
            <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
            
    `;

    movieNameRef.value="";
        }

        else{
            Result.innerHTML=`
            <h3 class="msg">${data.Error}
            </h3>  `
        }
        
       
      });

      
  }
};

searchBtn = addEventListener("click",Getmovie);
window.addEventListener("load", Getmovie);
