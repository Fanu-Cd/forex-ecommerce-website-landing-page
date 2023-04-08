export function Server(data){
    let result='';
    fetch('http://localhost:3001/signup',{
        method:'post',
        body:JSON.stringify(data),
        headers:{
        'Content-Type':'application/json'
        }
    })
    .then((res)=>{result=res;return result;})
    .then(()=>{})
    .catch((err)=>{result=res;return result;})
    
}