// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Loop through each time block 
  $(".time-block").each(function(){


  

  // Retrieve ID value of each time block 
  console.log($(this).attr("id").split("-")[1])
  // Extract number of the time in the ID value
var blockTime = $(this).attr("id").split("-")[1]

  // Get current time
  var currentTime = dayjs().hour()
  // Compare block time to current time 
  // If block time is less than current time then its past, add class name past to the timeblock
  if (blockTime < currentTime) {
    $(this).addClass("past")
  }
  // If block time is equal to current time it is present, add class name present to the timeblock
  else if (blockTime == currentTime) {
    $(this).addClass("present")
  }

  // If block time is larger than current time it is future, add class name future to the timeblock
else {
  $(this).addClass("future")
}


  })




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
