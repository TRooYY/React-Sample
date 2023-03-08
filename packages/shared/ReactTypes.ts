export type ElementType = any
export type Props = any
export type Key = any
export type Ref = any

export interface ReactElementType {
  /**
   * 内部字段，用于标识当前对象是一个 ReactElement。
   * 需要通过 Symbol 来保证唯一性
   */
  $$typeof: Symbol | number
  type: ElementType
  props: Props
  key: Key
  ref: Ref
  __mark: string
}

