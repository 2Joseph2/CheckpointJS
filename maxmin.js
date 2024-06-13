function maxmin(arr){
    let max=0
    let min=0
    if(arr[0]>arr[1]){
        max=arr[0]
        min=arr[1]
    }else{
        max=arr[0]
        min=arr[1]
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }else if(arr[i]<min){
            min=arr[i]
        }
    }
    return {max,min}
}