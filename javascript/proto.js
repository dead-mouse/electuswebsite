function Employee(name,age,salary,dept,exp){
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.dept = dept;
  this.exp = exp;
}
let employee = new Employee("dinesh",24,20000,"it",1);
console.log(employee);
