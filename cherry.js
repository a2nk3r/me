function roll(){
	var intId = setInterval(fun,100);
	var s1,s2,s3;
function fun(){
	var nos = ["Nos/0.png","Nos/1.png","Nos/2.png","Nos/3.png","Nos/4.png","Nos/5.png","Nos/6.png","Nos/7.png","Nos/8.png","Nos/9.png"];
	s1 = Math.floor(Math.random()*10);
	s2 = Math.floor(Math.random()*10);
	s3 = Math.floor(Math.random()*10);
	document.getElementById("c1").src = nos[s1];
	document.getElementById("c2").src = nos[s2];
	document.getElementById("c3").src = nos[s3];
		
}
setTimeout(function(){
	clearInterval(intId);
	var scr=0;
	if(s1===s2&&s2===s3){
		scr++;
	document.getElementById("msg").innerHTML = "You win!";
	document.getElementById("score").innerHTML = "Your score: 	"+scr;

	}
else {
	scr--;
	document.getElementById("msg").innerHTML = "You Lose!";
	document.getElementById("score").innerHTML = "Your score: 	"+scr;
	document.getElementById("othermsg").innerHTML = "try again!";
	}
	
},3000);

}
