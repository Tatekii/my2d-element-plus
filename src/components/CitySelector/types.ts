export interface CityItem {
  id: string,
  name: string,
  spell: string
}

export interface ProvinceItem {
  id: string,
  name: string,
  data: string[]
}

export type ListModeType = 'cityMode' | 'provinceMode'