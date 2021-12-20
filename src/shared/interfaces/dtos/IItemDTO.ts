export interface IItemDTO {
  id?: string
  referenceId: number
  name: string
  realatedId?: number
  submenus?: IItemDTO[]
}
