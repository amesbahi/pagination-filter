
// DOM list of divs containing each student detail
var studentDetails = document.querySelectorAll('.student-details');
console.log(studentDetails);

// Search
var searchHTML = '<input id="search-input" placeholder="Search for students...">' + ' <button id="search-button">Search</button>';
$("#student-search").html(searchHTML);

function onPageClick(pageNum) { // When we click on a pagination link, do this
  $('.student-item').hide(); // hide all of the students here using jquery
  console.log(pageNum);
  // if user clicks on a pagination link with a certain class, show students with a certain class
  $('.page-' + pageNum).show();
}

// on page load, show only the first 10 students
$(document).ready(function() {
  console.log("ready!"); // debug
  $("ul li.student-item").not(".page-1").hide();
});

// add an event listener to the search button
var $searchButton = $("#search-button");
var $searchInput = $("#search-input");
$searchButton[0].addEventListener("click", function() {
  // Search functionality
  var $students = $(".student-item"); // arry containing all of the students
  var searchString = $searchInput.val().toLowerCase(); // storing the search value in a variable
  $.each($students, function(index, student) {  // Looping over the students
    console.log(index, student);
    var $student = $(student);
    var findStudent = $student.find("h3").text();  // eg "alborz foo"
    var findEmail = $student.find("span.email").text();
    console.log(findStudent, findEmail);
    if (findStudent.indexOf(searchString) >= 0 || findEmail.indexOf(searchString) >= 0) {
      $(student).show();
    } else {
      $(student).hide();
    }
  });

  searchPaginationResults();
});

var searchPaginationResults = function() {
    // Pagination Functionality
  var studentsPerPage = 10 // Number of students per page to render
  var $allStudents = $('.student-item');
  var numberOfPages = Math.ceil($allStudents.length / studentsPerPage);
  console.log(numberOfPages);

  // HTML for pagination
  var paginationHTML = '<ul>';
  for (var i = 0; i < numberOfPages; i++) {
    paginationHTML += '<li onclick="onPageClick(' + (i + 1) +  ')"><a class="pagination">' + (i + 1) + '</a></li>\n';
  }
  paginationHTML += '</ul>';
  $("#pagination").html(paginationHTML);


  // create for loop adding order of pagination classes to each student
  var currentPageNum = 0;
  for (var i = 0; i < $allStudents.length; i++) {
    var student = $allStudents[i];
    console.log(student);
    // every 10 iterations of loop bump up currentPageNum by 1
    if (i % 10 === 0) {
      currentPageNum += 1;
    }
    student.className += " page-" + currentPageNum;
  }
}

searchPaginationResults();




/*function foo() {}

var foo5 = function() {};
var bar = () => {}*/


// 
// add(1,1)   // 2
// add(2,3)   // 5
// 
function add(a, b) {
  return a + b;
}

// 
// addThreeNums(1,1,1)  // 3
// addThreeNums(2,3,4)  // 9
//
function addThreeNums(x, y, z) {
  var g = add(x, y);

  //return g + z;
  return add(g, z);
}



// capture the search results
// pass that into the searchPaginationResults function
// display paginated results if there are more than 10 students