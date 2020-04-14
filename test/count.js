var btn = document.getElementById("btn");
var currClass = document.querySelectorAll(".current");
var nextClass = document.querySelectorAll(".next");
var number=document.getElementById("my-text");
btn.addEventListener('click',function(){
    //console.log(number.value);
    var interval = setInterval(function(){
        console.log(currClass[4].innerHTML," ",nextClass[4].innerHTML);
        if(currClass[4].innerHTML==number.value)
        {
                clearInterval(interval);
                return;
        }
        nextClass[4].classList.add("animate");
        setTimeout(function(){
            
            //var num = nextClass[4].innerHTML;
            currClass[4].innerHTML = nextClass[4].innerHTML;;
            nextClass[4].classList.remove("animate");
            nextClass[4].innerHTML = parseInt(currClass[4].innerHTML)+1;
        },500);

    },1000);

    

});