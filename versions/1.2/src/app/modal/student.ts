export class Student {
  id : string;
  first_name : string;
  last_name : string;
  age : string;
  email : string;
  phone_number : string;
  gender : string;
  image : string;
  proffesion : string;
  //mark,homework,announcements etc.

  constructor(id,first_name,last_name, age, email, phone_number, gender, image, proffesion){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.email = email;
    this.phone_number = phone_number;
    this.gender = gender;
    this.image = image;
    this.proffesion = proffesion;
  }
}
