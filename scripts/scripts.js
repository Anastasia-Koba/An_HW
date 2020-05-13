class Person{
    constructor(params){ 
        this.type = 'person';
        this.name = params.fullName;
        this.image = params.photo;
        this.birthdate = params.birthDate;
    }
    get age(){ 
        let today = new Date();
        return today.getUTCFullYear() - this.birthdate.getUTCFullYear();
    };
}

class Student extends Person{
    constructor(params){ 
        super (params);
        this.type = 'student';
        this.univer = params.university;
        this.course = params.universityYear;
    }
}

class Teacher extends Person{
    constructor(params){ 
        super (params);
        this.type = 'teacher';
        this.post = params.post;
    }
}

class School{
    constructor(){
        this.list = [];
        this.factory = new Factory();
    }
    add(person){
        this.list.push(person);
    }
}

class PersonFactory{
    create(type){
        if('student'){
            let man = new Student(type);
            appendStudentBlock(man);
            return man;
        } 
        if('teacher') {
            let man = new Teacher(type);
            appendStudentBlock(man);
            return man;
        } 
        else{
            let man = new Person(type);
            appendStudentBlock(man);
            return man;
        }
    }
}


function appendStudentBlock(student){
    let main = document.createElement("div");
    main.setAttribute("id","person");
    document.getElementById("person").append(main);

    let img = document.createElement("img");
    img.src = student.image;
    main.appendChild(img);
    let name = document.createElement("p");
    name.append(student.name);
    main.appendChild(name);
    let univer = document.createElement("p");
    univer.append(`Университет: ${student.univer}`);
    main.appendChild(univer);
    let course = document.createElement("p");
    course.append(`Курс ${student.course}`);
    course.setAttribute("id","nocol");
    main.appendChild(course);

    return main;
}
function openCard(student, target, ){

    let img_card = document.createElement("img");
    img_card.src = student.image;
    img_card.setAttribute("id","img_card");
    
    
    let name_card = document.createElement("p");
    name_card.append(student.name);
    name_card.setAttribute("id","name_card");

    let education_card = document.createElement("p");
    education_card.append(`Учится: ${student.univer}, ${student.course} курс`);

    let birthDate_new = document.createElement("p");
    birthDate_new.append(`День рождения: ${student.birthdate.getUTCDate()}.${student.birthdate.getUTCMonth()}.${student.birthdate.getUTCFullYear()}`);
    
    let main_card = document.createElement("div");
    let main_card2 = document.createElement("div");

    main_card.setAttribute("class","carding");

    main_card2.appendChild(name_card);
    main_card2.appendChild(birthDate_new);
    main_card2.appendChild(education_card);
    main_card.appendChild(main_card2);
    main_card.appendChild(img_card);
    target.appendChild(main_card);

    return main_card;
}
function input() {
    const studentArr = [ 
    { 
        type: 'teacher',
        fullName: 'Арсений Попов', 
        birthDate: new Date(1983, 3, 20), 
        photo: '/img/ars.jpg' 
    }, 
    { 
        type: 'studetn',
        fullName: 'Антон Шастун', 
        university: 'БФУ', 
        universityYear: 2, 
        birthDate: new Date(1998, 4, 19), 
        photo: '/img/ant.jpg' 
 
    }, 
    { 
        type: 'studetn',
        fullName: 'Ира Кузнецова', 
        university: 'БФУ', 
        universityYear: 2, 
        birthDate: new Date(1998, 8, 11), 
        photo: '/img/ira.jpg' 
    }, 
    ]; 
    studentArr.forEach((item) => { 
        const student = new Student(item); 
        const studentBlock = appendStudentBlock(student); 
        studentBlock.addEventListener('click', (event) => {openCard(student, event.currentTarget);}); 
    }); 
}
