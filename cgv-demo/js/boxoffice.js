/**
 * KOBIS, KMDB API를 활용한 박스 오피스
 */

const kobis_key=`7e2804fcf19f535083b2211d0ce1be96`
const kmdb_key = '59H5F0U0OFQB3R2261VM';

async function getKobis(){
    let url=`http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url+=`key=${kobis_key}&targetDt=20120101`

    let response = await fetch(url)
    return response.json();
}

/**
 * KMDB API 포스터 가져오기
 */
async function getPoster(movieNm,openDt){

    openDt = openDt.split('-').reduce((acc,cur)=> acc +cur)
    console.log(openDt)
    let url= `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}`;
    url += `&releaseDts=${openDt}&ServiceKey=${kmdb_key}`;

    let response=await fetch(url)
    let kmdb=await response.json()
    let result=await kmdb?.Data?.[0]?.Result?.[0]?.posters?.split('|');
    return response.json()
}

async function createBoxoffice(){
    let kobis= await getKobis();
    let list=kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(list)

    let count=0;

   
    let showList=list.slice(0,5).map(async (movie,idx)=>{
        let movieNm=movie.movieNm;
        let openDt=movie.openDt;
        let poster = await getPoster(movie.movieNm,movie.openDt)
        return {movieNm, openDt, poster}

        `
        <ul>
            ${
                outputList.map((movie)=>{
                    <li>
                        <div>
                            <img src='${movie.poster}'>
                            </img>
                        </div>
                        <div><h3>${movie.movieNm}</h3></div>
                        <div><h5>누적 관객수 ${movie.audiAcc}</h5></div>
                    </li>
                }).join("")
            }`
        })
}

window.addEventListener('DOMContentLoaded',()=>{
    createBoxoffice()
})
