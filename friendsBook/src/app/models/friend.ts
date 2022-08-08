export class Friend {
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;
  private favouriteLanguage: string;

  constructor(
    firstName: string, lastName: string, email: string, phone: string, favouriteLanguage: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.favouriteLanguage = favouriteLanguage;
  }
}
