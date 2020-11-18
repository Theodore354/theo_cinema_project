function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let seconds=0;
let minutes=0;
let hours=8
let day = 0;;

function hello(){
console.clear();
console.log(hours+":"+minutes+":"+seconds+" Day:"+day);
seconds=seconds+1;
if (seconds == 60){
  seconds = 0;
  minutes = minutes+1;
}
if (minutes == 60){
  minutes = 0;
  hours = hours+1;
}
if (hours == 22){
hours =8;
day = day+1;
}
setTimeout(hello,1)
}
for(let i = 0; i < 1; i++){
hello();
}
  

