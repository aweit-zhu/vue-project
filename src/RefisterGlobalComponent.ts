import StdTextField from '@/components/Basic/StdTextField.vue'
import StdButton from '@/components/Basic/StdButton.vue'
import StdSelect from '@/components/Basic/StdSelect.vue'
import type { App } from 'vue'

export function RegisterGlobalComponent(app: App<Element>) {
  app.component('StdTextField', StdTextField)
  app.component('StdButton', StdButton)
  app.component('StdSelect', StdSelect)
}
