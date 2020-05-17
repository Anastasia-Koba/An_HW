export default class Factory {
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