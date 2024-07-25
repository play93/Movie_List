const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzBjMzBmM2YyNzk1MWE2NjgzMjY1OTdiNDIzOWYwNiIsIm5iZiI6MTcyMTg3MTcyNi4yNDM2Nywic3ViIjoiNjY5ZGNiNjY3NTczNGMyN2QyYTZlN2VjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.McjUIK4tGIRriY1LszB1vEeeru8EcYsltwaGKd5ZOIs'
	}
};

// 본인의 API 키를 넣어주셔야 합니다.
const API_KEY = 'f30c30f3f27951a668326597b4239f06';
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;

fetch(URL)
.then(response => response.json())
.then(data => {
  console.log(data);
  // 이후 데이터 처리
})
.catch(error => console.error('Error:', error));


//영화 카드 생성
function mkCard(movie) {
  
  const card = document.creatElement('div');
  card.className = "movie_card"

  const fullStar = Math.floor(movie.vote_average / 2);
  const emptyStar = 5 - fullStar;

  let stars = '';
  for(let i=0;i<fullStar;i++){
    stars += '★';
  }
  for(let i=0;i<emptyStar;i++){
    stars += '☆';
  }

  card.innerHTML=`
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    <h3>${movie.title}</h3>
    <p>평점: ${stars}<span>${movie.vote_average}</span></p>
    <p>${movie.overview}</p>
  `
  card.addEventListner('click',function(){
    alert(`영화의 ID: ${movie.id}`);
  })

} 

//카드 클릭시 id를 alert로 출력


//검색구현
//1. 인풋에 입력한 검색어를 받아옴
//2. 입력값이 영화제목들 중에 있는지 없는지 확인
//3. 


//API