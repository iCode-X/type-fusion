/**
 * 深拷贝对象
 * @param obj 需要拷贝的对象
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 检查对象是否为空
 * @param obj 需要检查的对象
 */
export function isEmpty(obj: Record<string, any>): boolean {
  return Object.keys(obj).length === 0;
}
