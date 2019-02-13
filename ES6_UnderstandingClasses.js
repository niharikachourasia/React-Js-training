class Person
{
    //x="Hello class" //x is a property of this class
constructor(x){
    this.x=x;
}
//declaring method
showInfo(){
    console.log(this.x)
}

}//var person=new Person;
/* var person=new Person("Hiiii!!! have a nice day");
//console.log(person.x)
person.showInfo();//used in case of methods
//constructor helps to iinitialise our property. */



class Human extends Person{
    constructor(){
    super("Hello Super");
        this.gender='male'
    }
    showGen(){
        console.log(this.gender)
    }
}
const human = new Human();
human.showGen();
human.showInfo();