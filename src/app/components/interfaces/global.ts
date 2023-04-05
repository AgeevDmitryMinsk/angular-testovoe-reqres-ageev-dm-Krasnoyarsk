export interface IUsers {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IUserData []
  support: {
    url: string,
    text: string
  }
}

export interface IUserData {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
