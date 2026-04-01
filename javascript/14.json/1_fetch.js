
let key=`7e2804fcf19f535083b2211d0ce1be96`
let targetDt=`20260328`
const url=`https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`

window.addEventListener('DOMContentLoaded',()=>{
    show();
})

const getJson= async ()=>{
    let res= await fetch(url)

    return res.json();
}

const show = async ()=>{ 
    //1. Json 데이터 가져오기
    let kobis = await getJson()
    console.log(kobis)
    //2. 출력 데이터 생성 : DHTML

    let movieList= kobis.boxOfficeResult.dailyBoxOfficeList;

    let output=`

    <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
    <h3>${kobis.boxOfficeResult.showRange}</h3>

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
        movieList.map((con,index)=>

        `<tr>
            <td>${index+1}</td>
            <td>${con.movieNm}</td>
            <td>${con.openDt}</td>
            <td>${con.audiCnt}</td>
            <td>${con.audiAcc}</td>
            <td>${con.salesAcc}</td>
            
        </tr>`
        )
        .join('')
    }
        
    
    </table>
    
    `;

    //3. 출력

    document.querySelector('#content').innerHTML=output;
}

// show();