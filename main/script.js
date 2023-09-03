let cursor = document.querySelector("#cursor");
let cursorBlr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursorBlr.style.left = dets.x - 250 + "px";
    cursorBlr.style.top = dets.y - 250 + "px";
  });
  
// function moveMouseCursor(){
// document.addEventListener("mousemove",function(dets){
// document.querySelector("#cursor").style.transform=`translate(${dets.clientX +30}px,${dets.clientY}px)`;
// document.querySelector("#cursor-blur").style.transform=`translate(${dets.clientX -225}px,${dets.clientY -225}px)`;


// })


// }

// moveMouseCursor();

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursor.style.scale = 2;
    cursor.style.backgroundColor = "transparent";
    cursor.style.border = "1px solid #fff";
  });

  elem.addEventListener("mouseleave", function () {
    cursor.style.scale = 1;
    cursor.style.backgroundColor = "#95C11E";
    cursor.style.border = "0px solid #95C11E";
  });
});


let foodBtn=document.querySelector("#food-btn");
foodBtn.addEventListener("mouseenter",function(){
cursor.style.scale=2;
cursor.style.backgroundColor="transparent";
cursor.style.border="1px solid #fff";

});

foodBtn.addEventListener("mouseleave",function(){
cursor.style.scale=1;
cursor.style.backgroundColor="#95C11E"
cursor.style.border="0px solid #95C11E"



})

let elemAll=document.querySelectorAll(".elem");
elemAll.forEach(function(e){
e.addEventListener("mouseenter",function(){
cursor.style.scale=2.5;
cursor.style.backgroundColor="transparent";
cursor.style.border="1px solid #fff";

})
e.addEventListener("mouseleave",function(){
cursor.style.scale=1;
cursor.style.backgroundColor="#95C11E";
cursor.style.border="0px solid #95C11E";
})

});

let downArrow=document.querySelector("#arrow-down");
downArrow.addEventListener("mouseenter",function(){
cursor.style.scale=3;
cursor.style.backgroundColor="transparent";
cursor.style.border="1px solid #fff";

});

downArrow.addEventListener("mouseleave",function(){
cursor.style.scale=1;
cursor.style.backgroundColor="#95C11E";
cursor.style.border="0px solid #95C11E";
})



let cardAll=document.querySelectorAll(".card")
cardAll.forEach(function(t){
t.addEventListener("mouseenter",function(){
cursor.style.scale=3;
cursor.style.backgroundColor="transparent";
cursor.style.border="1px solid #fff"
})

t.addEventListener("mouseleave",function(){
    cursor.style.scale=1;
    cursor.style.backgroundColor="#95C11E";
    cursor.style.border="0px solid #95C11E";
})
    
})

// let navImg=document.querySelector("#nav img");
// navImg.addEventListener("mouseeter",function(){
// cursor.style.scale=2;
// cursor.style.backgroundColor="transparent";
// cursor.style.border="1px solid #fff";
// });
// navImg.addEventListener("mouseleave",function(){
//     cursor.style.scale=1;
//     cursor.style.backgroundColor="#95C11E";
//     cursor.style.border="0px solid #95C11E";
// });

let footCursor=document.querySelectorAll("#f2 h3");
footCursor.forEach(function(r){

    r.addEventListener("mouseenter",function(){
        cursor.style.scale=2;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid #fff";
        });
        r.addEventListener("mouseleave",function(){
            cursor.style.scale=1;
            cursor.style.backgroundColor="#95C11E";
            cursor.style.border="0px solid #95C11E";
        });
        
})

let footCursor2=document.querySelectorAll("#f3 h3");
footCursor2.forEach(function(r){

    r.addEventListener("mouseenter",function(){
        cursor.style.scale=2;
        cursor.style.backgroundColor="transparent";
        cursor.style.border="1px solid #fff";
        });
        r.addEventListener("mouseleave",function(){
            cursor.style.scale=1;
            cursor.style.backgroundColor="#95C11E";
            cursor.style.border="0px solid #95C11E";
        });
        
})






gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "10rem",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //    markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in ", {
  y: 70,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    //   markers:true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.6,
  opacity: 0,

  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});



gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

gsap.from("#page4 h1",{
y:50,
scrollTrigger:{
trigger:"#page4 h1",
scroller:"body",
start:"top 75%",
end:"top 70%",
scrub:3,



},

});