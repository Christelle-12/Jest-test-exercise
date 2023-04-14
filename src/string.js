 function stringLength(string){
    let len= string.length
    if (len >= 1 || len <= 10){
        console.log('I am grater than 1')
    }else {
        console.log('I am less than 10')
    }
    return len;
}
module.exports={stringLength};