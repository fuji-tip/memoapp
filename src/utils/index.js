import { format } from 'date-fns';

// eslint-disable-next-line import/prefer-default-export
export function dateToString(date) {
  if (!date) { return 'dddd'; }
  return format(date, 'yyyy年M月d日 HH:mm');
}
