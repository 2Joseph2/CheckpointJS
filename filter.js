function filter(arr,con){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(con!=arr[i]){
            res.push(arr[i])
        }
    }
    return res
}
