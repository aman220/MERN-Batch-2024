let sym = Symbol("mysymbl");

let obj = {
   name :"aman",
   lastname  :"singh",
   address :"aligarh",
   isverified : true,
   lastlogin : ["aligarh" , "agra" , "mathura"],
   fun : function aman(){
    return `my name is ${this.lastname}`;
   },
   "sheeer hu" :"haan bhai hu",
   [sym] : "sheer"
}

console.log(obj.fun())







