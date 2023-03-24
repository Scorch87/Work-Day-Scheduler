// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  var day = dayjs().format('dddd', 'M/D/YYYY');
  var date = dayjs().format('MMMM D, YYYY.');
  var hour = dayjs().hour();
  $('#currentDay').text(day+', '+date);
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // not sure how to do this without repeating myself a million times....
  var saveButton = $('.btn');
  var textArea = $('.col-8');

  saveButton.on('click', function(){
    this.input = textArea.val();
    console.log(this.input);
    localStorage.setItem('input', this.input);
  });
  
  //console.log(savedData);
  
  

  function renderLastRegistered(){
    var savedData = localStorage.getItem('input');
    if(savedData){
      textArea.text(savedData);
    }
  }
  renderLastRegistered();
  
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var hourDiv = $(".time-block").each(function (index, element){

    if (hour > parseInt(element.id)){
      element.classList = "row time-block past";
    }else if (hour === parseInt(element.id)){
      element.classList = "row time-block present";
    }else{
      element.classList = "row time-block future";
    }
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
