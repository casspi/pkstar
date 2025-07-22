export function o2a<T extends Record<string, any>>(obj: T) {
  return Object.entries(obj).reduce((acc, [key, value]: any) => {
    acc.push(value)
    return acc
  }, [] as T[])
}
