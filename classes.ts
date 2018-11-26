interface IUser {
  name: string;
  email: string;
  age: number;
  register();
  userInformation();
}

class User implements IUser {
  // private, cant be accessed outside of class, public can be accessed outside of class, protected cant be accessed from outside class but can be accessed by a class that inherites this one
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User Created: ${name}`);
  }

  register = () => {
    console.log(`${this.name} is now registered`);
  };

  userInformation() {
    console.log(`User: ${this.name}, ${this.email}, ${this.age}`);
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  userInformation = () => {
    super.userInformation();
  };
}

let arthur = new User('Arthur Dent', 'adent@gmail.com', 32);

console.log(arthur.age);
arthur.register();

let mike: User = new Member(1, 'Mike', 'mike@gmail.com', 34);

mike.userInformation();
