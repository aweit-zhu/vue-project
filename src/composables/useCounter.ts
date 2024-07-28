import { ref } from 'vue'

export function useCounter() {
  // 使用 ref 並指定初始值為 0
  const count = ref<number>(0)

  // 定義 increment 函數，無返回值
  function increment(): void {
    count.value++
  }

  // 定義 decrement 函數，無返回值
  function decrement(): void {
    count.value--
  }

  // 返回 count 和函數，包含類型註解
  return {
    count,
    increment,
    decrement
  }
}
