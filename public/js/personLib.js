export default class Person {
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

export default class Student extends Person {
    constructor(params){ 
        super (params);
        this.type = 'student';
        this.univer = params.university;
        this.course = params.universityYear;
    }
}

export default class Teacher extends Person {
    constructor(params){ 
        super (params);
        this.type = 'teacher';
        this.post = params.post;
    }
}