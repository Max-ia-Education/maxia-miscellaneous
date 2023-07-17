import { isEqual } from "lodash";

export const formatName = (name: string | undefined | null) => {
  if (!name) return ''
  let final_name = '';

  name.split(' ').forEach((word) => {
    if (!word) return
    final_name = final_name + word[0].toUpperCase() + word.toLowerCase().slice(1) + ' '
  })
  return final_name;
}

export const normalizeName = (name: string) => {
  return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function sliceObject<T extends Object>(data: T, keys: (keyof T)[]) {
  return Object.entries(data).reduce((prev, [key, value]) => {
    if (keys.includes(key as keyof T))
      prev[key as keyof T] = value
    return prev
  }, {} as Partial<T>)
}

export function formatDate(dateString: string | undefined | null, type: 'date' | 'time' | 'datetime') {
  if (dateString === undefined || dateString === null)
    return ' - '
  let date = new Date(dateString).toLocaleDateString('pt-br', { day: 'numeric', month: 'long' }).split(' ')
  // Capitalize Month
  date[2] = date[2].charAt(0).toUpperCase() + date[2].slice(1);
  const time = new Date(dateString).toLocaleTimeString('pt-br', { hour: 'numeric', minute: 'numeric' }).split(':').join('h')

  switch (type) {
    case 'date':
      return date.join(' ')
    case 'time':
      return time
    case 'datetime':
      return date.join(' ') + ' - ' + time
  }
}

export const formatMes = (mes: number) => {
  const meses = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro']
  return meses[mes]
}

export function unique<T>(list: T[]) {
  return [...new Set(list)]
}

export function uniqueObject<T>(arr: T[]) {
  return arr.reduce<T[]>((return_arr, curr) => {
    if (return_arr.filter(el => isEqual(el, curr)).length > 0)
      return return_arr

    return_arr.push(curr)
    return return_arr
  }, [])
}

export const fuzzyStringMatcher = (typed: string, matches: string[]) => {
  const clean_typed = typed.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const check_el = (el: string) => {
    const _clean_str = el.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return _clean_str.toLowerCase().includes(clean_typed.toLowerCase());
  }
  return matches.some(check_el)
}

export const mathMean = (arr: (number | undefined | null)[], round = false) => {
  const [qtde, sum] = arr.reduce((a, b) => {
    if (!b && b !== 0) return a
    return [a[0] + 1, a[1] + b]
  }, [0, 0])
  return round ? Math.ceil(sum / qtde) : sum / qtde
}
