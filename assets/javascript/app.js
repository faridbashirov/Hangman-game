const worde=document.getElementById("word");
const wronglettere=document.getElementById("wrong-letters");
const playagainBtn=document.getElementById("button");
const popup=document.getElementById("popup-container");
const notication=document.getElementById("notification-container");
const finalmessage = document.getElementById("final-message");
console.log(playagainBtn);
const figureparts = document.querySelectorAll(".figure-part")
function wrongsound(){
    sound=loadSound("./Users/macbook/Downloads/[YT2mp3.info] - The Pink Panther Theme Music (320kbps).mp3")
}
const words= ['fat',"lazy","fariz","leman","aysu","gunay","nergiz","ilqar"]
let count=0
let selecetedword = words[Math.floor(Math.random() * words.length)]
const correctletter=[]

const wrongletters=[]
console.log(selecetedword)
let underscore=[]
let generateunderscore=() =>{
    for(let i=0;i<selecetedword.length;i++){
        underscore.push("_")

    }
    return underscore;
}

document.addEventListener('keypress', (event) =>{
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword)
    if(selecetedword.indexOf(keyword) > -1){
       correctletter.push(keyword)
       for(let i =0;i<selecetedword.length;i++){
         if(selecetedword[i]==keyword){
              underscore[i]=keyword
        }
       }
    //    underscore[selecetedword.indexOf(keyword)]=keyword;
       worde.innerHTML=underscore.join("  ");

       if(underscore.join('')=== selecetedword){
           popup.style.display="block"
           finalmessage.innerText="You win.";
            popup.style.display="flex"

       }
    }
    else{
        
       if(wrongletters.indexOf(keyword)>-1){

       }
       else{
        wrongletters.push(keyword)
       }
        console.log(wrongletters)
        wronglettere.innerHTML="<p>WRONG LETTER</p>"
        wronglettere.innerHTML+= wrongletters
        figureparts.forEach((part,index) => {
            const errors=wrongletters.length;
            console.log(part)
            console.log(index)
            if(index<errors){
                part.style.display="block"
                // if(wrongletters.length==6){
                //     popup.style.display="flex"
                    
                // }
            }
            else{
                part.style.display="none"
            }
                 
            
             
            
           
        });
        if(wrongletters.length===figureparts.length){
            finalmessage.innerText="Unfortunately you lost.";
            popup.style.display="flex"
        }


    }
})


worde.innerHTML=generateunderscore().join(" ");

playagainBtn.addEventListener('click', ()=>{
    popup.style.display="none";
    wrongletters.splice(0)
    correctletter.splice(0)
    underscore.splice(0)
    wronglettere.innerHTML=""
    figureparts.forEach(element =>{
        element.style.display="none"
    })
    
    selecetedword = words[Math.floor(Math.random() * words.length)]
    worde.innerHTML=generateunderscore().join(" ");
})
