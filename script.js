var searchHTML = '<input placeholder="Search for students...">' + '<button>Search</button>';
var paginationHTML = '<ul>' +
                     '<li>1</li>' +
                     '<li>2</li>' +
                     '<li>3</li>' +
                     '<li>4</li>' +
                     '<li>5</li>' +
                     '<li>6</li>' +
                     '</ul>';
/*var students = [
  {
    name: "iboya vat",
    email: "iboya.vat@example.com"
  },
  {
    name: "aapo niskanen",
    email: "aapo.niskanen@example.com"
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  },
  {
    name: ,
    email:
  }
];*/

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
