var getNum = new Array();
var numLength;
var check = true;

window.onload = function() {
	numLength = document.getElementById("select").value;
	setNumber();
}

//Generates random numbers from 1 (included) to 9 (included)
//Numbers must not be the same as each other
function setNumber() {
	var random;
	getNum.splice(0, getNum.length - 1);
	while (getNum.length < numLength) 
	{
		random = Math.floor(Math.random() * 9) + 1;

		for (i = 0; i < getNum.length; i++) 
		{
			if (getNum[i] == random) 
			{
				check = false;
				break;
			}
		}

		if (check) 
		{
			getNum.push(random);
		}
		check = true;
	}
	console.log(getNum)
}

//Check user number
function checkUserText() {
	let userText = document.getElementById("userText").value;
	var setText = document.getElementById("textArea");
	let numbers = [];
	//Check if userText is number
	for (var i = 0; i < userText.length; i++) {
		numbers.push(userText[i]);
		
		if (userText.charCodeAt(i) <= 48 || userText.charCodeAt(i) > 57 || userText.length != numLength) 
		{
			setText.innerHTML += "Type " + numLength + " numbers from 1 to 9!\n";
			check = false;
			break;
		}
		
	}
	
	//Check if user entered a number with different digits
	for (let index = 0; index < numbers.length; index++) {
		if (numbers[index] == numbers[index+1]) 
		{
			setText.innerHTML += "Enter a number with " + numLength + " different digits!\n";
			check = false;
			break;
		}
	}

	//Check Bulls and Cows
	var bull, cow;

	if (check) 
	{
		bull = 0;
		cow = 0;                                         
                                                         
		for (i = 0; i < getNum.length; i++)          
		{
			for (k = 0; k < userText.length; k++) 
			{
				if ((getNum[i] == userText[k]) && (i == k)) 
				{
					bull++;
				} else if ((getNum[i] == userText[k]) && (i != k)) 
				{
					cow++;
				}
			}
		}

		if (userText == "") 
		{
			setText.innerHTML += "\nType " + numLength + " numbers!\n";
		} else if (bull == 0 && cow == 0) 
		{
			setText.innerHTML += userText + " : 0 bull(s), 0 cow(s)\n";
		} else if (bull == numLength) 
		{
			setText.innerHTML += bull + " bulls! You won the game!!!\nClick restart to play again!\n";
		} else 
		{
			setText.innerHTML += userText + " : " + bull + " bull(s), " + cow + " cow(s)\n";
		}
	}
	check = true;
}
	
//change difficulty
function difficulty() {
	numLength = document.getElementById("select").value;
	reload();
}

//restart game
function reload() {
	setNumber();
	document.getElementById("textArea").innerHTML = "";
}