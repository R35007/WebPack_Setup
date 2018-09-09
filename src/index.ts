class User{
    constructor(name,password,age){
        this.name=name;
        this.password=password;
        this.age=age;
    }
    register(){
        console.log(`${this.name} has been registered`);
    }
}
let siva = new User("Siva","pswd","23");
siva.register();