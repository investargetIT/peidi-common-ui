import { ref, watch, computed } from "vue";

/**
 * localStorage操作hooks
 * 支持存储、更新和获取localStorage中的特定属性
 * 如果属性存在就覆盖指定参数，不影响其他参数
 * 如果属性不存在就创建新属性
 */

interface LocalStorageOptions {
  // 是否启用响应式
  reactive?: boolean;
  // 默认值
  defaultValue?: any;
}

/**
 * 使用localStorage的hooks
 * @param key localStorage的键名
 * @param options 配置选项
 */
export function useLocalStorage<T = any>(
  key: string,
  options: LocalStorageOptions = {}
) {
  const { reactive = true, defaultValue = null } = options;

  // 获取当前localStorage的值
  const getStoredValue = (): T | null => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.warn(
        `[useLocalStorage] Error reading localStorage key "${key}":`,
        error
      );
      return defaultValue;
    }
  };

  // 设置localStorage的值
  const setStoredValue = (value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(
        `[useLocalStorage] Error setting localStorage key "${key}":`,
        error
      );
    }
  };

  // 响应式数据
  const storedValue = ref<T | null>(getStoredValue());

  // 如果启用响应式，监听数据变化并同步到localStorage
  if (reactive) {
    watch(
      storedValue,
      (newValue) => {
        setStoredValue(newValue as T);
      },
      { deep: true }
    );
  }

  /**
   * 设置localStorage的值
   * @param value 要设置的值
   */
  const setValue = (value: T): void => {
    storedValue.value = value;
    if (!reactive) {
      setStoredValue(value);
    }
  };

  /**
   * 更新localStorage中特定属性的值
   * 如果属性存在就覆盖，不存在就创建
   * @param updates 要更新的属性键值对
   */
  const updateValue = (updates: Partial<T>): void => {
    if (typeof storedValue.value === "object" && storedValue.value !== null) {
      // 如果是对象，合并更新
      const newValue = { ...storedValue.value, ...updates };
      storedValue.value = newValue as T;
      if (!reactive) {
        setStoredValue(newValue as T);
      }
    } else {
      // 如果不是对象，直接设置
      setValue(updates as T);
    }
  };

  /**
   * 获取特定属性的值
   * @param property 属性名
   * @returns 属性值
   */
  const getProperty = <K extends keyof T>(property: K): T[K] | undefined => {
    if (storedValue.value && typeof storedValue.value === "object") {
      return (storedValue.value as any)[property];
    }
    return undefined;
  };

  /**
   * 删除localStorage中的键
   */
  const removeValue = (): void => {
    try {
      window.localStorage.removeItem(key);
      storedValue.value = defaultValue;
    } catch (error) {
      console.warn(
        `[useLocalStorage] Error removing localStorage key "${key}":`,
        error
      );
    }
  };

  /**
   * 清空所有localStorage
   */
  const clearAll = (): void => {
    try {
      window.localStorage.clear();
      storedValue.value = defaultValue;
    } catch (error) {
      console.warn(`[useLocalStorage] Error clearing localStorage:`, error);
    }
  };

  // 计算属性，提供当前值的只读版本
  const value = computed(() => storedValue.value);

  return {
    // 当前值（响应式）
    value,
    // 设置值
    setValue,
    // 更新特定属性
    updateValue,
    // 获取特定属性
    getProperty,
    // 删除值
    removeValue,
    // 清空所有
    clearAll,
    // 重新从localStorage加载值
    refresh: () => {
      storedValue.value = getStoredValue();
    },
  };
}

/**
 * 快速设置localStorage的值（非响应式）
 * @param key localStorage的键名
 * @param value 要设置的值
 */
export function setLocalStorage<T = any>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(
      `[setLocalStorage] Error setting localStorage key "${key}":`,
      error
    );
  }
}

/**
 * 快速获取localStorage的值（非响应式）
 * @param key localStorage的键名
 * @param defaultValue 默认值
 */
export function getLocalStorage<T = any>(
  key: string,
  defaultValue: T | null = null
): T | null {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.warn(
      `[getLocalStorage] Error reading localStorage key "${key}":`,
      error
    );
    return defaultValue;
  }
}

/**
 * 快速更新localStorage中特定属性的值
 * @param key localStorage的键名
 * @param updates 要更新的属性键值对
 */
export function updateLocalStorage<T extends Record<string, any>>(
  key: string,
  updates: Partial<T>
): void {
  try {
    const currentValue = getLocalStorage<T>(key);
    if (currentValue && typeof currentValue === "object") {
      const newValue = { ...currentValue, ...updates };
      setLocalStorage(key, newValue);
    } else {
      setLocalStorage(key, updates);
    }
  } catch (error) {
    console.warn(
      `[updateLocalStorage] Error updating localStorage key "${key}":`,
      error
    );
  }
}
