//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
    //code to create new option element, populate, and append
    var stateSelect = $('select[name="state"]');
    var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
    state = usStates[idx];
    option = $(document.createElement('option'));
    option.attr('value', state.abbreviation);
    option.html(state.name);
    stateSelect.append(option);
    
	
	//code to execute when the sign-up form is submitted
    //this is the raw DOM form element
    //wrap it in a jQuery object so we can use jQuery methods on it
    $('.signup-form').submit(function(){
    
    //select a descendant input element with the name "addr-1"
    var signupForm = $(this);
    var addr1Input = signupForm.find('input[name="addr-1"]');
    var addr1Value = addr1Input.val(); 
    	if(addr1Value.length > 0){
    		var zipInput = signupForm.find('input[name="zip"]');
   			 var zipValue = zipInput.val();  
   			 if(zipValue.length <= 0){
   			 	alert('Address must have a zipcode. Please enter zipcode.');
   			 	return false;
   			 }
   			return true; 
    	}

});
}
}); //on document ready 