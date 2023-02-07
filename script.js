// let tl =gsap.timeline()




    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".section-1",
    //         // start: "top top",
    //         scrub: 1,
    //         pin: true,
    //     }
    // });


  let tl= gsap.timeline()
   
tl
.to('.bold h4',{
    // scale:5,
  bottom:"0%",
    ease:Expo.easeInOut,
    // ease:Expo.easeInOut,
   
    duration:1
})
.from('.small',{
    
    opacity:0,
    ease:Expo.easeInOut,
    scrub:1,
    duration:0.5
   
    
})
.from('.buttons',{
    
  opacity:0,
    // ease:Expo.easeIn,
    // scrub:1,
    duration:0.5
    
   
   
})