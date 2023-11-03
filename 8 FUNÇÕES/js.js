function f1(callback){
 console.log('ola');
 function f2 (){
    console.log('mundo')
 };   
}
f1(f2())