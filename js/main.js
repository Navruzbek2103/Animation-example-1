let violetCircle = 10;
let yellowCircle = 3;
let stringNum = String(violetCircle + yellowCircle);
let finish = new Audio("./../audio/finish.ogg")
let title = new Audio("./../audio/title.ogg")
let text = new Audio("./../audio/text.ogg")

function viewCircle(){
  setTimeout(() => {
    $(".wrapper-title").style.transform = 'translateX(0)'
    $(".wrapper-text").style.transform = 'translateX(0)'
  }, 300);

  for(let i = 0; i < violetCircle; i++){
    let circle = createElement("li", "inner-left-item");
    $(".inner-left-list").appendChild(circle)
  }
  for(let i = 0; i < yellowCircle; i++){
    let circle = createElement("li", "inner-right-item");
    $(".inner-right-list").appendChild(circle)
  }
}
viewCircle()
$(".wrapper").addEventListener("click", (e) => {
  if(e.target.classList.contains("wrapper-title-img") && e.target.id === "title-img"){
    title.play()
  }
  if(e.target.classList.contains("wrapper-title-img") && e.target.id === "text-img"){
    text.play()
  }
})
function calculateExample(){
  let enterNum = 0;
  $(".btn-group").addEventListener("click", (e)=>{
    let counter = stringNum[enterNum];
    switch(enterNum){
      case 0: $(".firstValue").value = e.target.textContent; break;
      case 1: $(".secondValue").value = e.target.textContent; break
    }

    if(e.target.textContent === counter){
      $(".inner-left-list").classList.remove("showCircleError")
      $(".inner-right-list").classList.remove("showCircleError")
      $(".input-group").style.border = "8px solid #CFCECE"

      enterNum++; 
    }
    else{
      if(enterNum == 0) $(".inner-left-list").classList.add("showCircleError")
      if(enterNum == 1) $(".inner-right-list").classList.add("showCircleError")
      $(".input-group").style.border = "8px solid #ED696A"
    }
    if(enterNum == 2){
      $(".wrapper").style.transform = "translateX(-200%)";
      $(".wrapper").style.transition = "transform .7s ease-in";
      finish.play();
      $(".next-page").style.transform = "translateX(0)";
    }
  })
  $(".reload-img").addEventListener("click", () => {
    window.location.reload()
  })
}

calculateExample()