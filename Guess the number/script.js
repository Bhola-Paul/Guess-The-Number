let rand=(Math.floor(Math.random()*100+1));
    console.log(rand);
    const submit=document.querySelector(`#submit`)
    const num=document.querySelector(`#num`)
    const prev=document.querySelector(`#prev`)
    const remain=document.querySelector(`#remain`)
    const torf=document.querySelector(`#torf`)
    const start=document.querySelector(`.res`)
    console.log(submit);
    console.log(num);
    console.log(prev);
    console.log(remain);
    console.log(torf);
    console.log(start);
    const p=document.createElement(`p`);
    console.log(p);
    let prevguess=[]
    let tot=0;
    let play=true;
    if(play){
        submit.addEventListener(`click`,function (e) {
            e.preventDefault()
            const guess=parseInt(num.value)
            // console.log(guess);
            validate(guess)

        })
    }
    function validate(guess) {
        if(isNaN(guess)){
            alert(`Enter a valid number`);
        }
        else if(guess<1){
            alert(`Enter a  number more than 0`);
        }
        else if(guess>100){
            alert(`Enter a valid number less than 101`);
        }
        else{
            prevguess.push(guess)
            // check(guess)
            if(tot===10){
                // displayguess(guess)
                display(`Game over! The number was ${rand}`);
                endgame()
            }
            else{
                displayguess(guess)
                check(guess)
            }
        }
    }
    function check(guess) {
        if(guess===rand){
            display(`Congrats! It is correct`)
            endgame()
        }
        else if(guess<rand){
            display(`It is lower than the number`)
        }
        else{
            display(`It is higher than the number`)
        }
        
    }
    function displayguess(guess) {
        num.value=``;
        prev.innerHTML+=`${guess},`
        tot++
        remain.innerHTML=`${10-tot}`
    }
    function display(message) {
        torf.innerHTML=`<h3>${message}</h3>`
    }
    function endgame() {
        num.value=``;
        prev.innerHTML=``
        num.setAttribute(`disabled`,``)
        // p.classList.add(`button`)
        p.innerHTML=`<h4 id="newgame">Start Over</h4>`
        start.appendChild(p)
        play=false;
        newgame();
    }
    function newgame() {
        const s=document.querySelector(`#newgame`);
        s.addEventListener(`click`,function (e) {
            prevguess=[];
            rand=(Math.floor(Math.random()*100+1));
            tot=0;
            remain.innerHTML=`${10}`;
            prev.innerHTML=``;
            torf.innerHTML=``;
            num.removeAttribute(`disabled`);
            start.removeChild(p);
            play=true;
        })}