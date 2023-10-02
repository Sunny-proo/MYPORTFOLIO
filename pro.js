const  c=document.querySelector("section")
// c.addEventListener("mousemove",dragging)
// let isDragging=false
// function dragging(e){
//     if(!isDragging) return;
//     c.scrollLeft=e.pageX;
// }
// c.addEventListener("scroll",iscroll)
// function iscroll(){
//     if(c.scrollLeft===0){

//     }else{

//     }
// }
// const cc=[...c.children]
// let cardPerView=Math.round(1000/250)
// cc.slice(-cardPerView).reverse().forEach(card => {
//     c.insertAdjacentHTML("afterbegin",card.outerHTML)
    
// });
// cc.slice(0,-cardPerView).forEach(card => {
//     c.insertAdjacentHTML("beforeend",card.outerHTML)
    
// });
// c.addEventListener("mousedown",dragstart)

// function dragstart(){
//     isDragging=true;
// }
// function dragstop(){
//     isDragging=false;
// }
let abtn=document.querySelectorAll(".btn")
abtn.forEach((bt)=>
bt.addEventListener("click",()=>{console.log(bt.id)
    
                    c.scrollLeft+=bt.id=="left" ?-1000:1000
}
))
// for(btns of abtn){
//     btns.addEventListener("click",()=>{
//         console.log(btns.id)
//         let butn=this
//         let id=butn.getAttribute("id")
//         console.log(id)
//         if(id=="left"){
//             c.scrollLeft+=-1000
//         }
//         if(id=="right"){
//             c.scrollRight+=1000
//         }
//     })
// }
let dlike=document.querySelectorAll(".dlike")
let like=document.querySelectorAll(".like")

    like.forEach((l)=>{
        l.addEventListener("click",()=>{
            l.style.color=l.style.color=="white"? "red":"white"
            dlike.forEach((l)=>{
                l.style.color=l.style.color=="black"? "white":"white"
                
                
            })
            
        })
        
    })
    

    dlike.forEach((l)=>{
        l.addEventListener("click",()=>{
            l.style.color=l.style.color=="white"? "black":"white"
            
    like.forEach((l)=>{
            l.style.color=l.style.color=="red"? "white":"white"
            
            
        })
        
    })
            
            
        })
        

