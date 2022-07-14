import {RECIEVE,REQUEST} from  '../constant';

export function actionCall(){

    function fetchcall(){
        fetch(`https://reqres.in/api/users`)
        .then(res=> res.json().then(data =>{
            console.log(data);
            return data;})
        )
        .catch(err => {
           return err;
        })
        
    }

    return {
        type:REQUEST,
        payload: fetchcall(),
    }
}