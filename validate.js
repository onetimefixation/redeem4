const form = document.getElementById('myForm');
const cardCode = document.getElementById('cardCode');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

document.getElementById('cancel').addEventListener('click', e=> {
	window.location.replace('index.html');
});

function checkInputs() {
	// trim to remove the whitespaces
	const cardCodeValue = cardCode.value.trim();
	


	if(cardCodeValue === '') {
		setErrorFor(cardCode, "Please enter valid code to redeem.");
        }
        else if (cardCodeValue.length !== 16) {
            setErrorFor(cardCode, "That code didn't work. Try again. If the code is for a specific app, redeem it in that app. Learn more.");
            } 
        
        else {
		/* setSuccessFor(cardCode); */

  setSuccessFor(cardCode, cardCodeValue.replace(/\D/g,''));

 
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}


function setSuccessFor(input, message) {
	console.log("input.parentElement is " + input.parentElement);
	const formControl = input.parentElement;
	const small = formControl.querySelector('form-control');

	// convert message to currency

	const newMessage = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(message);
	
	formControl.className = 'form-control';
	
	document.getElementById('actionButton').innerHTML = 'CONFIRM';

	formControl.innerText = "\n\n\nYou are about to add " + newMessage + " to your account";
}

