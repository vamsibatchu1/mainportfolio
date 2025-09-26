declare module 'lodash-es' {
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: {
      leading?: boolean;
      maxWait?: number;
      trailing?: boolean;
    }
  ): T & { cancel(): void; flush(): ReturnType<T> };

  export function throttle<T extends (...args: any[]) => any>(
    func: T,
    wait?: number,
    options?: {
      leading?: boolean;
      trailing?: boolean;
    }
  ): T & { cancel(): void; flush(): ReturnType<T> };

  // Add other commonly used lodash-es functions as needed
  export function cloneDeep<T>(value: T): T;
  export function isEqual(value: any, other: any): boolean;
  export function merge<T extends object>(object: T, ...sources: Partial<T>[]): T;
  export function pick<T extends object, K extends keyof T>(object: T, ...paths: K[]): Pick<T, K>;
  export function omit<T extends object, K extends keyof T>(object: T, ...paths: K[]): Omit<T, K>;
}
