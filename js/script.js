
console.log("hi!");

// DOM list of divs containing each student detail
var studentDetails = document.querySelectorAll('.student-details');
console.log(studentDetails);

var students = [];

for (var i = 0; i < studentDetails.length; i++) {
  // Single div containing a student detail
  var studentDetail = studentDetails[i]; // div
  // storing the names and emails for search
  var studentEmail = studentDetail.getElementsByTagName('span')[0].innerText;
  var studentName = studentDetail.getElementsByTagName('h3')[0].innerText;
  // creating a new student object for search
  var student = {
    name: studentName,
    email: studentEmail
  };
  students.push(student);
}
console.log(students);


// Search
var searchHTML = '<input id="search-input" placeholder="Search for students...">' + ' <button class="search-button">Search</button>';
document.getElementById("student-search").innerHTML = searchHTML;


// pagination functionality
var studentsPerPage = 10 // Number of students per page to render
var allStudents = document.querySelectorAll('.student-item');
var numberOfPages = Math.ceil(allStudents.length / studentsPerPage);
console.log(numberOfPages);

// HTML for pagination
var paginationHTML = '<ul>';
for (var i = 0; i < numberOfPages; i++) {
  paginationHTML += '<li onclick="onPageClick(' + (i + 1) +  ')"><a class="pagination">' + (i + 1) + '</a></li>\n';
}
paginationHTML += '</ul>';
document.getElementById("pagination").innerHTML = paginationHTML;


// create for loop adding order of pagination classes to each student
var currentPageNum = 0;
for (var i = 0; i < allStudents.length; i++) {
  var student = allStudents[i];
  console.log(student);
  // every 10 iterations of loop bump up currentPageNum by 1
  if (i % 10 === 0) {
    currentPageNum += 1;
  }
  student.className += " page-" + currentPageNum; /******** QUESTION for trevor: how can this be appended to student detail
  if the condition hasn't been met yet until first iteration of 10? **************/
}

function onPageClick(pageNum) { // When we click on a pagination link, do this
  $('.student-item').hide(); // hide all of the students here using jquery
  console.log(pageNum);
  // if user clicks on a pagination link with a certain class, show students with a certain class
  $('.page-' + pageNum).show();
}
console.log(paginationHTML);

// on page load, show only the first 10 students
$(document).ready(function() {
  console.log("ready!"); // debug
  $("ul li.student-item").not(".page-1").hide();
});

// add an event listener to the search button
var searchButton = document.getElementsByClassName("search-button");
var searchInput = document.getElementById("search-input");
searchButton.addEventListener("click", function() {
  if (searchInput.value.toLowerCase() === $("ul li div.student-details h3").innerText ||
      searchInput.value.toLowerCase() === $("ul li div.student-details span").innerText) {
    var textInputted = searchInput.value.toLowerCase();
    $("ul li div.student-details h3" && "ul li div.student-details span" === textInputted).show();
    $("ul li div.student-details h3" && "ul li div.student-details span" != textInputted).hide();
  }
});
