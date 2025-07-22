import type { ProSchemaFormField } from '@/components'
import { isBoolean } from '@pkstar/utils'

export function useRoleField(options: boolean | Partial<ProSchemaFormField> = false) {
  if (isBoolean(options)) {
    options = options
      ? {
          rules: [
            { required: true, message: '请选择角色' },
            (v) => {
              if (!v.value) {
                throw '请选择角色'
              }
            },
          ],
        }
      : {}
  }
  const { props = {}, ...rest } = options

  const filed = reactive<ProSchemaFormField>({
    value: '',
    is: 'HorSelectPicker',
    label: '角色',
    options: [],
    get: (v) => {
      const { text = '', value = '' } = v || {}
      return { roleId: value, roleName: text }
    },
    set: (s, f) => {
      const { roleId: value = '', roleName: text = '' } = s
      if (value) {
        f.value = { value, text }
      }
    },
    props: {
      valueType: 'object',
      clearable: true,
      direction: 'column',
      placeholder: '请选择角色',
      ...props,
    },
    ...rest,
  })

  onBeforeMount(async () => {
    const options: any = []
    filed.options = options.map((item: any) => ({ text: item.label, ...item }))
  })

  return filed
}
