let boxes=document.querySelectorAll(".box");

for(let i=0;i<boxes.length;i++){

 boxes[i].style.backgroundColor=boxes[i].classList[1];
 boxes[i].style.height="100px";
 // console.log(boxes[i].style.height);
}
for(let i=0;i<boxes.length;i++){
    
     if((boxes[i].getBoundingClientRect().top-window.innerHeight+(boxes[i].clientHeight/10))<0){
      boxes[i].classList.add("show");
     }
     else{
           boxes[i].classList.remove("show");
    }}
    // for(let i=0;i<boxes.length;i++){
    //      console.log(boxes[i].offsetTop);
    //  if(((boxes[i].getBoundingClientRect().top)<(window.scrollY / 5 * 4))){
    //   boxes[i].classList.add("show");
    //  }
    //  else{
    //   boxes[i].classList.remove("show"); 
    //  }
    // }
//   console.log(window.innerHeight);
// window.onscroll=function(){
//   console.log(`scrolly ${window.scrollY}`);
//   console.log(`box gray moved ${boxes[6].getBoundingClientRect().top-window.innerHeight+(boxes[6].clientHeight/2)}`);

      //  console.log(boxes[2].offsetTop);}
let show=function(){
    for(let i=0;i<boxes.length;i++){
    
     if((boxes[i].getBoundingClientRect().top-window.innerHeight+(boxes[i].clientHeight/100))<0){
      boxes[i].classList.add("show");
     }
     else{
           boxes[i].classList.remove("show");
    }}}
    window.document.addEventListener("scroll",show);
  // console.log(boxes[2].clientHeight);
  // console.log(boxes[2].scrollHeight);
 // console.log(window.innerHeight);

