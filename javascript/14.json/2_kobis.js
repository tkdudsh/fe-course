let key=`7e2804fcf19f535083b2211d0ce1be96`
// let targetDt=`20260328`



const getMovieInfo= async(movieCd)=>{
    let url2=`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`

    let res=await fetch(url2);
    // console.log(res.json())
    return res.json();
    
}
const handleMovieInfo=async (movieCd)=>{
    //영화상세 API를 통해 json 객체 가져오기
    let info= await getMovieInfo(movieCd);
    let movieNm=info.movieInfoResult.movieInfo.movieNm;
    let dir=info.movieInfoResult.movieInfo.directors[0].peopleNm;
    let actor=info.movieInfoResult.movieInfo.actors[0].peopleNm;

    console.log(movieNm,dir,actor)
    // console.log(info.movieInfoResult.movieInfo.actors)

    openModal({movieNm,dir,actor})
}

const openModal=(obj)=>{
    let modal=document.querySelector('#modal')
    let modalBody=document.querySelector('#modal-body')
    let modalClose=document.querySelector('#modal-close')

    modalClose.addEventListener('click',()=>{
        modal.style.display='none';

    })

    let output= `
    
            <h3>${obj.movieNm}</h3>
            <ul>
            <li>${obj.dir}</li>
            <li>${obj.actor}</li>
            </ul>
    
                `
    modal.style.display='flex';
    modalBody.innerHTML=output
}



const getJson = async(type, targetDt) => {
    const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
    let response = await fetch(data_url);
    return response.json();
}


//handleBoxOffice 함수 정의
const handleBoxOffice = async() => {
    let type = document.querySelector('#type').value;
    let sdate = document.querySelector('#sdate').value;  
    
    if(type === 'default') {
        alert('타입을 선택해주세요');
        document.querySelector('#type').focus();        
    } else if(sdate === '') {
        alert('날짜를 선택해주세요');
        document.querySelector('#sdate').focus();
    } else {
        targetDt = sdate.split("-").reduce((acc, cur)=> acc+cur);
        let kobis = await getJson(type, targetDt); 
        let kobisBoxOffice =  kobis.boxOfficeResult;
        let kobisBoxOfficeList = null;
        if(type === 'Daily') {
            kobisBoxOfficeList =  kobis.boxOfficeResult.dailyBoxOfficeList;
        } else {
            kobisBoxOfficeList =  kobis.boxOfficeResult.weeklyBoxOfficeList;
        }
console.log(kobis);

        let output = `
            <h1>${kobisBoxOffice.boxofficeType}</h1>
            <h3>${kobisBoxOffice.showRange}</h3>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                    <th>당일관객수</th>
                    <th>누적관객수</th>
                    <th>누적매출액</th>
                </tr>
                ${
                    kobisBoxOfficeList.map((movie) => `
                        <tr>
                            <td>${movie.rank}</td>
                            <td><a href="#" onclick="handleMovieInfo('${movie.movieCd}')">${movie.movieNm}</a></td>
                            <td>${movie.openDt}</td>
                            <td>${parseInt(movie.audiCnt).toLocaleString()}</td>
                            <td>${parseInt(movie.audiAcc).toLocaleString()}</td>
                            <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                        </tr>
                    `).join("")
                }
            </table>
        `;

        document.querySelector('#content').innerHTML = output;
    } 
    
}