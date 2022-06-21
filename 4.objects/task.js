function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Оля", "Женский", 21);
const student2 = new Student("Маша", "Женский", 18);
const student3 = new Student("Федя", "Мужской", 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
    this.marks = [];
  };
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...args) {
  if(this.marks === undefined) {
    this.marks = [];
  }
  for (const arg of args) {
    this.marks.push(arg);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (const mark of this.marks) {
    sum += mark;
  }
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
