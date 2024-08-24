<template>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    @rowClicked="onRowClicked"
    @rowDoubleClicked="onRowDoubleClicked"
    class="ag-theme-quartz"
  >
  </ag-grid-vue>
</template>
<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css' // Optional Theme applied to the Data Grid
import { AgGridVue } from 'ag-grid-vue3' // Vue Data Grid Component
import { ref } from 'vue'
const props = defineProps<{
  rowData: any[]
  colDefs: any[]
}>()
const emits = defineEmits(['rowDoubleClicked', 'rowClicked'])
const rowData = ref<any[]>(props.rowData)
const colDefs = ref<any[]>(props.colDefs)
const onRowDoubleClicked = (event: { data: any }) => {
  const selectedRowData: any = event.data
  emits('rowDoubleClicked', selectedRowData)
}
const onRowClicked = (event: { data: any }) => {
  const selectedRowData: any = event.data
  emits('rowClicked', selectedRowData)
}
</script>
