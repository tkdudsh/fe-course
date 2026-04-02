let data='http://swopenapi.seoul.go.kr/api/subway/59704a526f746b6436326f6b616474/json/realtimeStationArrival/0/50/염창';


const getJson= async ()=>{

    let res= await fetch(data)
    return res.json()
}


const func= async()=>{
    let sta = await getJson();

    console.log(sta)
    
    let a=sta.realtimeArrivalList[1];
    let output=`

        <h1>${a.arvlMsg3} </h1>
    
    `

    document.querySelector('#content').innerHTML=output;
}

func();