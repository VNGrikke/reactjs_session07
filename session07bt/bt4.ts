function typeOfInput(x:any) {
    let y = (typeof x)
    return console.log(y);
}
let dog1:{name:string,height:string,weight:string} = {
    name:"hùng",
    height:"175cm",
    weight:"100kg"
}
typeOfInput("vũ");
typeOfInput(9);
typeOfInput(dog1);