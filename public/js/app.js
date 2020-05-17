import {Student, Teacher, Person} from './personLib.js';
import {School} from './school.js';
import {Factory} from './factory.js';

// проинициализируем фабрику
const factory = new Factory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
school.add( factory.createStudent({ name: 'Антон Шастун' }) );
school.add( factory.createStudent({ name: 'Ира Кузнецова' }) );
school.add( factory.createTeacher({ name: 'Арсений Попов' }) );

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
// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendToDom(document.appendStudentBlock);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше