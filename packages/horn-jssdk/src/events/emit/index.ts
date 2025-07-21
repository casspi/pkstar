import { callSync } from '../../core'

export interface EmitOptions {
  name: string
  data?: any
}

/**
 * 事件触发
 */
export const emit = (options: EmitOptions) => {
  const { name, data = '' } = options
  callSync<void>({
    name,
    data: JSON.stringify(data),
    service: 'events',
    action: 'emit',
  })
}
