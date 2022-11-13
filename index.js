// 1
const students = [
    {
        firstname : "idk",
        lastname : "idkdad",
        email : "idk@gmail.com"
    },
    {
        firstname : "tsetsgee",
        lastname : "tsetsgeedad",
        email : "tsetsgee@gmail.com"
    },
    {
        firstname : "boldoo",
        lastname : "boldoodad",
        email : "boldoo@gmail.com"
    },
    {
        firstname : "dfr",
        lastname : "dfrdad",
        email : "dfr@gmail.com"
    },
    {
        firstname : "water",
        lastname : "waterdad",
        email : "water@gmail.com"
    }
];
// 2
students[0].firstname = "Mihail"
students[0].lastname = "mikeovsky"

// 3
function findStudent(f, l){
    for(var i=0; i<students.length; i++){
        if(students[i].firstname == f && students[i].lastname == l) {
            return students[i];
        }
    }
}

console.log(findStudent("dfr", "dfrdad"));

