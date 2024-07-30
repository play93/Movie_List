const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzBjMzBmM2YyNzk1MWE2NjgzMjY1OTdiNDIzOWYwNiIsIm5iZiI6MTcyMTg3MTcyNi4yNDM2Nywic3ViIjoiNjY5ZGNiNjY3NTczNGMyN2QyYTZlN2VjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.McjUIK4tGIRriY1LszB1vEeeru8EcYsltwaGKd5ZOIs"
  }
};

const API_KEY = "f30c30f3f27951a668326597b4239f06";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // 이후 데이터 처리
    const movies = data.results;
    const movieContainer = document.getElementsByClassName("movie_container")[0];
    movies.forEach((movie) => {
      const card = mkCard(movie);
      movieContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error:", error));

//영화 카드 생성 함수
function mkCard(movie) {
  const card = document.createElement("div");
  card.className = "movie_card";

  //평점(최대10)을 받아와 별(최대5개)로 표시

  /*
    평점을 2로 나눈 몫을 유효 별점으로 표시하고 
    5에서 유효별점 만큼 뺀 값을 빈 별점으로 표시
  */

  const fullStar = Math.floor(movie.vote_average / 2);
  const emptyStar = 5 - fullStar;

  let stars = "";
  for (let i = 0; i < fullStar; i++) {
    stars += "★";
  }
  for (let i = 0; i < emptyStar; i++) {
    stars += "☆";
  }

  //html생성
  card.innerHTML = `
    <img class="movie_post" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    <h3 class="movie_title">${movie.title}</h3>
    <p class="movie_vote">평점: ${stars}<span>(${movie.vote_average})</span></p>
    <p class="movie_description">${movie.overview}</p>
  `;

  //카드 클릭시 id를 alert로 출력
  card.addEventListener("click", function () {
    alert(`영화의 ID: ${movie.id}`);
  });
  return card;
}

//검색구현
//1. 인풋에 입력한 검색어를 받아옴

//2. 검색버튼 클릭하면 입력값이 영화제목들 중에 있는지 없는지 확인
/*
  2-1 영화 카드들을 객체로 title과 overview만 넣어서
  card[0] = {
    title:
    overview:
  }
  card[1] = {
    title:
    overview:
  }
  card[2] = {
    title:
    overview:
  }
  ...

  2-2 객체를 돌며 입력값이 있는지 확인 (filter),,
*/
//=>활용해서 제목만 검색 제목+내용검색 만들 수 있을 것 같음
//힌트로 작성
document.getElementById("search_btn").addEventListener("click", () => {
  const query = document.getElementById("search_keyword").value.toLowerCase();
  const movieCards = document.querySelectorAll(".movie_card");
  movieCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

//3. 해당하는 영화만 화면에 출력

const searchKeyword = document.getElementById("search_keyword");
const searchBtn = document.getElementById("search_btn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchKeyword.value;
  console.log(val);
  //input에 입력한 검색한 입력값 받아오는 것 확인
});

//API
