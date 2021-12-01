/*
Question 3
 HSuttle Week 10 Lab Submission 
Create an application that generates an array of 5 random
 numbers 1-10. The user should then guess a number and 
 the app will tell them how many time that number exists 
 within the array.*/
let randomNums=[];
function go(){
	for(i=0;i<5;i++){
		randomNums[i]=Math.floor(Math.random()*10)+1;
	}

	userChoice=parseInt(prompt("Enter a number between 1 and 10:"));
	frequency=0;
	for(i=0;i<randomNums.length;i++){
		if(randomNums[i]==userChoice){
			frequency++;
		}
	}	
	document.getElementById("main").innerHTML="The computer random numbers are: "+randomNums.toString();
	alert("your number appears "+frequency+" times");
}
