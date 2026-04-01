window.addEventListener('DOMContentLoaded',()=>{
    showJson();
})

const dataUrl='http://127.0.0.1:5500/javascript/13.asynchronous/employee.json'

const getJson= async ()=>{
    let res=await fetch(dataUrl)// await를 붙이지 않으면 return문부터 실행됨.
    return res.json()
}

const showJson=async ()=>{
    let jsonData=await getJson();

    let output=`
  
    <h1>${jsonData.title}</h1>


    <table border="1">
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Color</th>
        <th>Emoji</th>
      </tr>
    ${
        jsonData.list.map((emp,index)=>

            `<tr>
                
                <td>${index+1}</td>
                <td>${emp.name}</td>
                <td>${emp.age}</td> 
                <td>${emp.department}</td>
            </tr>`

        )
        .join("")

    
    }
    </table>
    `;

    document.querySelector('#content').innerHTML=output
}