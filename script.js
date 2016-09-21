
console.log("hi!");

// DOM list of divs containing each student detail
var studentDetails = document.querySelectorAll('.student-details');
console.log(studentDetails);

var students = [];

for (var i = 0; i < studentDetails.length; i++) {
  // Single div containing a student detail
  var studentDetail = studentDetails[i]; // div

  /*console.log('>>>>>',
              studentDetail,
              studentDetail.getElementsByTagName('h3'),
              studentDetail.getElementsByTagName('h3')[0],
              studentDetail.getElementsByTagName('h3')[0].innerText,
              studentDetail.getElementsByTagName('span'),
              studentDetail.getElementsByTagName('span')[0],
              studentDetail.getElementsByTagName('span')[0].innerText
  );*/
  // storing the names and emails
  var studentEmail = studentDetail.getElementsByTagName('span')[0].innerText;
  var studentName = studentDetail.getElementsByTagName('h3')[0].innerText;
  // creating a new student object
  var student = {
    name: studentName,
    email: studentEmail
  };
  students.push(student);
}
console.log(students);


// Search
var searchHTML = '<input placeholder="Search for students...">' + ' <button>Search</button>';
document.getElementById("student-search").innerHTML = searchHTML;

// Pagination
var paginationHTML = '<ul>' +
                     '<li><a class="active" href="#">1</a></li>' +
                     ' <li><a href="#">2</a></li>' +
                     ' <li><a href="#">3</a></li>' +
                     ' <li><a href="#">4</a></li>' +
                     ' <li> <a href="#">5</a></li>' +
                     ' <li><a href="#>6</a></li>' +
                     '</ul>';
document.getElementById("pagination").innerHTML = paginationHTML;
