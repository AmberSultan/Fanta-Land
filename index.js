var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "1% 90%",
    end:"50% 50%",
    scrub: true,
    // markers : true,

}})

tl.to(".fanta",{
    top: "120%",
    left: "5%"
}, 'orange')

tl.to(".lemon",{
    top: "160%",
    left: "27%"
}, 'orange')

tl.to(".orange",{
    width: "15%",
    top: "160%",
    // right: "0%"
    left: "80%"
}, 'orange')

tl.to(".leaf",{
    width: "15%",
    top: "130%",
    // right: "0%"
    left: "85%",
    width:"10%"
}, 'orange')

tl.to(".leaf2",{
    width: "15%",
    top: "130%",
    // right: "0%"
    left: "85%",
    width:"10%"
}, 'orange')

tl.to(".leaf21",{
    width: "15%",
    top: "130%",
    // right: "0%"
    left: "3%",
    width:"10%"
}, 'orange')



var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "7% 90%",
    end:"50% 50%",
    scrub: true,
    // markers : true,

}})

tl2.from(".cardLemon1",{
    rotate:"-90deg",
    left:"4%",
    top : "0%"

}, "ca")

tl2.from(".pepsi",{
    rotate:"-90deg",
    right:"4%",
    top : "0%"

}, "ca")

tl2.to(".fanta",{
    // rotate:"-90deg",
    // right:"4%",
    top : "220%",
    left: '30%',
    // with: "10%"

}, "ca")

tl2.to(".lemon",{
    // rotate:"-90deg",
    // right:"4%",
    top : "210%",
    left: '43%',
    // with: "10%"

}, "ca")

