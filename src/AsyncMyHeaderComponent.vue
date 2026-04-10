<script lang="ts">
import { defineAsyncComponent, defineComponent, h } from 'vue'
export default defineAsyncComponent({
  loader: () => import('@/MyHeader.vue'),
  delay: 300,
  loadingComponent: () =>
    defineComponent({
      setup() {
        return h('span', null, 'Loading ...')
      },
    }),
})
</script>
