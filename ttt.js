let boxes = document.querySelectorAll(".box");
let wText = document.querySelector("#text");
let nGame = document.querySelector("#newGame"); 
let wPatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
let winner = false;
filledBox = 0;
let dialogues = ["A: What are you so pressed about? (with care)",
"kei vo?",
"B: Just fuck off",
"A: Just tell me what happened(again with more care)",
"B: That's None of your business tbh",
"A: 🤡🤡🤡🤡",
"A: 🤡🤡🤡🤡",
"A: 🤡🤡🤡🤡"
]

let xTurn = true;
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
       if(xTurn)
       {
        box.innerText = "X";
        xTurn = false;
        box.disabled = true;
        wText.innerText= dialogues[filledBox];
        checkWinner();
        drawCheck();
        console.log(filledBox)
       }
       else{
        box.innerText = "O";
        xTurn = true;
        box.disabled = true;
        wText.innerText= dialogues[filledBox];
        checkWinner();
        drawCheck();
        console.log(filledBox)
       }
    } 
    )
})
const checkWinner = ()=>{
    for(pattern of wPatterns)
    {
        if(boxes[pattern[0]].innerText!="")
    {
    if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText)        
        {
            if(xTurn)
            {
            wText.innerText = "O is the winnner ^^";
            let winner = true;
            for(box of boxes)
            {
                box.disabled=true
            }
        }
        else{
            wText.innerText = "X is the winnner ^^";
            winner = true;
            for(box of boxes)
            {
                box.disabled=true
            }
        }
    }
}
    }}
    const newGame = ()=>
    {
        for(box of boxes)
        {
            box.disabled=false;
            box.innerText = "";
        }
        xTurn = true;
        wText.innerText = "Have a nice game!"
        winner = false
        filledBox=0;
    }
    nGame.addEventListener("click", ()=>{
        newGame()
    })
    const drawCheck = ()=>{
        
       
           filledBox++
            if (filledBox==9 && winner==false)
            {
                wText.innerText = "Its a Draw";
            }

        }
    
    
    