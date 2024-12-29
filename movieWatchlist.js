let movies=[];
if(localStorage.getItem("movies")){
  movies=JSON.parse(localStorage.getItem("movies"));
}

function isAccepted(msg, ...keys){
    const value=prompt(msg);
    if(keys.includes(value)){
        return value;
    }else{
        alert("hatalı tuşlama yaptınız");
        return isAccepted(msg, ...keys);
    }
}
function listMovie(){
    const listOfMovies=movies.map((movies, index)=>`${index+1}. ${movies}`).join("\n");
    alert(listOfMovies);
}

function addMovie(){
    const movieName=prompt("Filmin adını giriniz");
    movies.push(movieName);
    localStorage.setItem("movies", JSON.stringify(movies));
}

function mainMenu(){
  const value=isAccepted("yapmak istediğiniz işlemi secininiz:\n1. Filmleri listele.\n2.Film ekle\n3.çıkış","1","2","3");
  if(value==1){
    return listMovie();
  }else if(value==2){
    return addMovie();
  }
}

mainMenu();