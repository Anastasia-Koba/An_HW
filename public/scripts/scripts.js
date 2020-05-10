class Student{
    only=this;
    constructor(params) {
        this.fullName = params.fullName;
        this.bdate = params.bDate;
        this.photo = photoUrl;
        this.univer = params.university;
        this.course = params.course;
    }
    get bDateStr(){ 
        return(string(only.bDate).split(' '));
    }; 
    get age(){ 
        return (Date()-only.bDate());
    }; 
}
function appendStudentBlock(student){
    let img = document.createElement('img');
    img.src = student.photo;
    let name_block = document.createElement('p');
    name_block.append(student.fullName);
    let univer_block = document.createElement('p');
    univer_block.append(`Университет: ${student.univer}`);
    let course_block = document.createElement('p');
    course_block.append(`Курс ${student.course}`);

    let main = document.createElement('div');
    
    main.setAttribute('id','all');
    main.appendChild(img);
    main.appendChild(name_block);
    main.appendChild(univer_block);
    main.appendChild(course_block);
    document.getElementById('all').append(main);
    return main;
}

function openCard(student, target){
    let img_card = document.createElement('img');
    img_card.src = student.photo;
    let name_card = document.createElement('p');
    name_card.append(student.fullName);
    let study_card = document.createElement('p');
    study_card.append(`Учится: ${student.univer}, ${student.course} курс`);
    let bDate_card = document.createElement('p');
    bDate_card.append(`День рождения: ${student.bdate.getUTCDate()}.${student.bdate.getUTCMonth()}.${student.bdate.getUTCFullYear()}`);
    
    let main_card = document.createElement('div');

    main_card.setAttribute('class','carding');
    img_card.setAttribute('id','img_card');
    name_card.setAttribute('id','name_card');
    main_card.appendChild(name_card);
    main_card.appendChild(bDate_card);
    main_card.appendChild(study_card);
    main_card.appendChild(img_card);
    target.appendChild(main_card);
    return main_card;
}
function input() {
    const studentArr = [ 
    { 
        fullName: 'Арсений Попов', 
        university: 'БФУ', 
        course: 4, 
        birthDate: new Date(1996, 3, 20), 
        photoUrl: '/img/ars.jpg' 
    }, 
    { 
        fullName: 'Антон Шастун', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(1998, 4, 19), 
        photoUrl: '/img/ant.jpg' 
    }, 
    { 
        fullName: 'Ира Кузнецова', 
        university: 'БФУ', 
        course: 2, 
        birthDate: new Date(1998, 8, 11), 
        photoUrl: '/img/ira.jpg' 
    }, 
    ]; 
    studentArr.forEach((item) => { 
        const student = new Student(item); 
        const studentBlock = appendStudentBlock(student); 
        studentBlock.addEventListener('click', (event) => {openCard(student, event.currentTarget);}); 
});

}
