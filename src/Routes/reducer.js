
let initialData={
    searchData:[],name:""
}

export default function Reducer(state=initialData,{type,payload}){

    if(type=="changesearchedData"){
        return {...state,searchData:payload}
    }
    if(type=="setName"){
        return {...state,name:payload}
    }
   

    return state
}