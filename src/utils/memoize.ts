/* eslint-disable @typescript-eslint/no-explicit-any */
type Func<T extends any[], R> = (...args: T) => R;

export function memoize<T extends any[], R>(func: Func<T, R>): Func<T, R> {
  const cache = new Map<string, R>();
  return (...args: T): R => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, func(...args));
    }
    return cache.get(key)!;
  };
}
