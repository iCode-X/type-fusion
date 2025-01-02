/**
 * 将所有属性设为可选的深度类型转换
 */
export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends object ? PartialDeep<T[P]> : T[P];
};

/**
 * 提取对象的所有键的类型
 */
export type KeysOf<T> = keyof T;

/**
 * 类型断言函数
 * @param value 需要断言的值
 */
export function assertType<T>(value: any): asserts value is T {
  // 具体实现根据需求
  // 例如，简单的类型检查（仅限基础类型）
  if (typeof value !== typeof (null as any as T)) {
    throw new Error(
      `Type assertion failed: expected ${typeof value} to be ${typeof (null as any as T)}`
    );
  }
}
