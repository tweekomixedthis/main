var inpt = document.getElementById('input');
var placeholder = document.getElementById('placeholder');

//when clicked inside of textbox
inpt.addEventListener('focus',function(){
    newPosition();
});

//when clicking out of the text box
inpt.addEventListener('blur',function(){
    //check if there is text
    if(inpt.value.length==0){
        defaultPosition();
    }
    
});
//Function for resetting text
function defaultPosition(){
    placeholder.style.color = "rgba(0,0,0,0.6)";
    inpt.style.border = "1px solid rgba(0,0,0,0.2)";
    placeholder.style.fontSize = "16px";
    placeholder.style.marginTop = "0px"
    placeholder.style.backgroundColor = "transparent";
    placeholder.style.padding = "0px 0px";

}

// Function for moving text
function newPosition(){
    placeholder.style.color = "#1a73e8";
    inpt.style.border = "2px solid #1a73e8";
    placeholder.style.transition = "0.1s ease";//add smooth transition
    placeholder.style.fontSize = "12px";//change size
    placeholder.style.marginTop = "-27px"//Move up
    placeholder.style.backgroundColor = "white";//add color to background
    placeholder.style.padding = "0px 6px";//add white space on each side
    
}