const form = document.getElementById('myForm');
const cardCode = document.getElementById('cardCode');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const cardCodeValue = cardCode.value.trim();
	


	if(cardCodeValue === '') {
		setErrorFor(cardCode, 'Please enter valid code to redeem.');
        }
        else if (cardCodeValue.length !== 16) {
            setErrorFor(cardCode, 'Please enter valid code to redeem.');
            } 
        
        else {
		/* setSuccessFor(cardCode); */
  /***************************************************************** */	
  /* This is temporary until the proper success field is constructed */ 

  setErrorFor(cardCode, cardCodeValue.replace(/\D/g,'')) + " has been added to your account";

  /***************************************************************** */
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

