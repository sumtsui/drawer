import { TItem } from '../contexts/ItemsTypeDef';

export function getNewItem(): TItem {
  return {
    name: '',
    note: '',
    amount: 1,
    img: undefined,
    label: 'Not labeled',
    dateAcquired: new Date().toISOString(),
    id: new Date().getTime().toString(),
  };
}
