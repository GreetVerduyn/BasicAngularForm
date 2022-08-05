export interface friend {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber?: string;
  favouriteLanguage?: string;
}

export class Friend {

  constructor(
    public firstname: string,
    public lastname: string,
    public email: string,
    public phoneNumber?: string,
    public favouriteLanguage?: string
  ) {  }

}

