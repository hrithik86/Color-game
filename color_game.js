var numsquares=6;
var colors=generateRandomColors(numsquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=randomcolor();
var colordisplay=document.getElementById("cd");
var msgdisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");
for(var i=0;i<modebuttons.length;i++)
{ 	modebuttons[i].addEventListener("click",function()
	{
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=="Easy")
			numsquares=3;
		else
			numsquares=6;
		reset();
	});
}
function reset()
{
	colors=generateRandomColors(numsquares);
	pickedcolor=randomcolor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New Colors";
	msgdisplay.textContent="";
	for(var i=0;i<squares.length;i++)
	{	if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}	
	
	else
		squares[i].style.display="none";
	}
	h1.style.background="steelblue";
}

// easybtn.addEventListener("click",function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numsquares=3;
// 	colors=generateRandomColors(numsquares);
// 	pickedcolor=randomcolor();
// 	colordisplay.textContent=pickedcolor;
// 	for(var i=0;i<squares.length;i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];
// 		}
// 	else{
// 			squares[i].style.display="none";		
// 		}	
// 	}
// });
// hardbtn.addEventListener("click",function(){
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numsquares=6;
// 	colors=generateRandomColors(numsquares);
// 	pickedcolor=randomcolor();
// 	colordisplay.textContent=pickedcolor;
// 	for(var i=0;i<squares.length;i++){
		
// 		squares[i].style.background=colors[i];
// 		squares[i].style.display="block";		
			
// 	}
// });

resetbutton.addEventListener("click",reset);
	// colors=generateRandomColors(numsquares);
	// pickedcolor=randomcolor();
	// colordisplay.textContent=pickedcolor;
	// resetbutton.textContent="New Colors";
	// msgdisplay.textContent="";
	// for(var i=0;i<squares.length;i++)
	// {	
	// 	squares[i].style.background=colors[i];
	
	// }
	// h1.style.background="steelblue";

colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++)
{	//adding initial colors
	squares[i].style.background=colors[i];
	//add quick listener to squares
	squares[i].addEventListener("click",function(){
	clickedcolor=this.style.background;	
		
		if(clickedcolor==pickedcolor){
			msgdisplay.textContent="correct";
			resetbutton.textContent="play again?";
			changecolor(clickedcolor);
			h1.style.background=clickedcolor;
		}
		else
			{this.style.background="#232323";
			msgdisplay.textContent="Try Again";}	
		
		});
}


function changecolor(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background=color;
	}
}
function randomcolor(){
	var random= Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomclr());
	}
	return arr;
}
function randomclr(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g + ", " + b + ")";
}