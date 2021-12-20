import { IItemDTO } from '@shared/interfaces/_index'

const itemResponse = (list: IItemDTO[]) => {
  const menu: any = []

  list.forEach(itemList => {
    menu.push({
      referenceId: itemList.referenceId,
      realatedId: itemList.realatedId || null,
      name: itemList.name,
    })
  })

  const filteredMenu = menu.filter(dad => {
    dad.submenus = menu.filter(child => child.realatedId === dad.referenceId)
    return dad.realatedId === null
  })

  return filteredMenu
}

export { itemResponse }
