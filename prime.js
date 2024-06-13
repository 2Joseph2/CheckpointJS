function prime(x){
    if (x <= 1) return false
    if (x === 2) return true

    for(let i=2;i<x;i++){
        if(x%i==0){
            return false
        }
    }
    return true

}
