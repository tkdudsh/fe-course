
// fetch 호출 모듈방식


export const fetchData= async (url)=>{

            const response=await fetch(url)
            const jsonData= await response.json()
            return jsonData
        }