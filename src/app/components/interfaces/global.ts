export interface CommonResponseType<T> {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: T
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

export interface IColorData {
  id: number,
  name: string
  year: number,
  color: string,
  pantone_value: string
}
