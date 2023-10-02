let car=document.querySelector("#car")
a=1
ScrollTrigger.refresh();
function animation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

}
animation()
gsap.to("#car",{
    transform:"translate(200%,0)",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        marker:true,
        start:"top 0%",
        end:"top -5%",
        scrub:true,
    }

})
document.addEventListener("mousemove",(event)=>{
  gsap.to("#cursor",{
      left:event.x-50,
      top:event.y-50,
      // scale:1,
  })
})

gsap.to("#p",{
  transform:"translate(200%,-400%)",
  scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      marker:true,
      start:"top 0",
      end:"top -5%",
      scrub:true,
  }

})
gsap.to(".fish",{
  transform:"translate(-200%,-400px)",
  scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      marker:true,
      start:"top 0",
      end:"top -5%",
      scrub:true,
  }

})
gsap.from("#page2 .out h2 ",{
  x:-1000,
  delay:5,
  duration:0.8,
  scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      marker:true,
      start:"top 50%",
      end:"top -5%",
      scrub:true,
  }

})
gsap.from("#page2 .out img ",{
  x:300,
  scale:0.2,
  delay:5,
  duration:1.5,
  scrollTrigger:{
      trigger:"#page2",
      scroller:"#main",
      marker:true,
      start:"top 50%",
      end:"top -5%",
      scrub:true,
  }

})
// let h1=document.querySelector
gsap.to("#c",{
  transform:"translate(600%,-500%)",
  scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      marker:true,
      start:"top 0",
      end:"top -5%",
      scrub:true,
  }

})
gsap.from("#page3 .cout h2",{
  x:500,
  y:200,
  scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      marker:true,
      start:"top 50%",
      end:"top -5%",
      scrub:true,
  }

})
gsap.from("#page3 .cout #pr",{
  x:500,
  y:200,
  scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      marker:true,
      start:"top 50%",
      end:"top -5%",
      scrub:true,
  }

})
gsap.from("#page3 .cout img",{
  x:500,
  y:200,
  scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      marker:true,
      start:"top 50%",
      end:"top -5%",
      scrub:true,
  }

})
// document.addEventListener("scroll",rat)
// function rat(){
  gsap.from("#page1 h1",{
    y:100,
    opacity:1,
    delay:0.5,
    duration:0.8,
    stagger:0.3,
   })
// }
gsap.from("#page1 #car",{
  x:-700,
  opacity:1,
  delay:0.5,
  duration:0.8,
  stagger:0.3,})
  gsap.from("#page1 #bln",{
    scale:0.1,
    opacity:0,
    delay:1,
    duration:1,
})