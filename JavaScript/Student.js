function student() {
    let student = {name: "Ali", id: 1, city: "Mumbai"};
    console.log(student.name);
    
    if(student.name){
        student.name = "Mohd Ali";
        console.log(student.name);
    }
}

student();