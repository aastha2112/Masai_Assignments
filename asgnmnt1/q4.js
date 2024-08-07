// Store the name as String, school as String, grade as character, section as character, rollNo as int and the marks scored as int by the student in 3 subjects (Maths , Science and English)

// Print the report card of the student (You can make it look nice by using some keyboard symbols ), Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art) or Text Art (https://fsymbols.com/text-art/) for some inspiration

let studentName = "Aastha";
let schoolName = "DPS, Manali";
let studentGrade = "A";
let studentSection = "B";
let studentRollNum = 21;
let studentMarksInMaths = 92;
let studentMarksInScience = 94;
let studentMarksInEnglish = 93;

console.log(
  `   * * * * * * * * * * * * * * *
       R E P O R T  C A R D
   * * * * * * * * * * * * * * *
    Name     : ${studentName}
    Roll No. : ${studentRollNum} 
    Section  : ${studentSection}   
    Grade    : ${studentGrade}  
    ____________________________
       Marks Obtained in
     Maths   Science   English
      ${studentMarksInMaths}       ${studentMarksInScience}        ${studentMarksInEnglish}
     
   * * * * * * * * * * * * * * *
      School : ${schoolName} 
   * * * * * * * * * * * * * * *
`
);
