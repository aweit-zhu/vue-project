import type { InjectionKey, Ref } from 'vue'

export const key1: InjectionKey<Ref<string>> = Symbol()
export const key2: InjectionKey<Ref<number>> = Symbol()
export const key3: InjectionKey<Ref<boolean>> = Symbol()
