
var numoffruitbuttons=document.querySelectorAll(".fruit").length;


for (var i=0; i < numoffruitbuttons; i++ ){
    document.querySelectorAll(".fruit")[i].addEventListener('click' , function play(){

        var buttonInnerHTML=this.innerHTML
        playosund(buttonInnerHTML);
        buttonanimation(buttonInnerHTML);
        chgimg(buttonInnerHTML);

}
    )


document.addEventListener("keydown", function (event){
    playosund(event.key);
    buttonanimation(event.key);
    chgimg(event.key);


}

)

function playosund(key){
    switch (key) {
        case "a":
            var audio=new Audio("sounds/apple.mp3");
            audio.play();
            break;
        
        case "b":
                var audio=new Audio("sounds/banana.mp3");
                audio.play();
                break;

        case "c":
            var audio=new Audio("sounds/cherry.mp3");
            audio.play();
            break;

        case "l":
            var audio=new Audio("sounds/lemon.mp3");
            audio.play();
            break;

        default: console.log(key);
    }


    
} 


}


function buttonanimation(currentkey) {
    var activebuttom=document.querySelector("."+currentkey);
    activebuttom.classList.add("pressed");

    setTimeout(function()
    {
        activebuttom.classList.remove("pressed");

    }, 150);


}


/* 新增一個change image的 function */

function chgimg(imgkey) {
    var imgphoto=document.querySelector("."+imgkey);
    var buttext=document.querySelector("."+imgkey);

    switch (imgkey) {
        case "a":
            imgphoto.style.backgroundImage = "url('./images/apple.jpeg')";
            buttext.innerHTML = "apple";

            setTimeout(function()
            {
                imgphoto.style.backgroundImage = "url('./images/apple1.jpeg')";
                buttext.innerHTML = "a";
                
            }, 1500);
            break;

        case "b":
            imgphoto.style.backgroundImage = "url('./images/banana.jpeg')";
            buttext.innerHTML = "banana";

            setTimeout(function()
            {
                imgphoto.style.backgroundImage = "url('./images/banana1.jpeg')";
                buttext.innerHTML = "b";
                
            }, 1500);
            break;

        case "c":
            imgphoto.style.backgroundImage = "url('./images/cherry.jpeg')";
            buttext.innerHTML = "cherry";

            setTimeout(function()
            {
                imgphoto.style.backgroundImage = "url('./images/cherry1.jpeg')";
                buttext.innerHTML = "c";
                
            }, 1500);
            break;

        case "l":
            imgphoto.style.backgroundImage = "url('./images/lemon.jpeg')";
            buttext.innerHTML = "lemon";

            setTimeout(function()
            {
                imgphoto.style.backgroundImage = "url('./images/lemon1.jpeg')";
                buttext.innerHTML = "l";
                
            }, 1500);
            break;

        default: console.log(imgphoto);



}

}


/* 
這邊的 buttonanimation(currentkey)是追朔上面的兩個值
buttonanimation(buttonInnerHTML);
buttonanimation(event.key);

假設得到w,currentkey就是w的意思，只是用變數去代替
再來再新建一個activebutton變數，這邊是用這變數去代替後面一串，後面就等於是.w ==>w按鈕的class

接下來透過新增一個class的去製造按鈕變稍白的特效，在按鈕w中新增了pressed的這個ＣＳＳ
activebuttom.classList.add("pressed");

*/
