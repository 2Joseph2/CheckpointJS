function count(str){
    str=removeSpace(str)
    return str.length
}
function removeSpace(str){
    for (let i=0;i<str.length;i++){
        if (str[i]==" "){
            str=str.replace(" ","")
        }
    }
    return str
}