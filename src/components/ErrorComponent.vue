<script setup lang="ts">
defineProps<{
  message: string | unknown
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <div v-if="message" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-dialog">
      <header class="modal-header">
        <h3 class="modal-title">Notification</h3>
        <button @click="emit('close')" class="close-button">×</button>
      </header>
      <div class="modal-body">
        <p>{{ message }}</p>
      </div>
      <footer class="modal-footer">
        <button @click="emit('close')" class="btn-close">Close</button>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-dialog {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 90%;
  max-width: 500px;
}

.modal-header {
  background-color: #f8d7da;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5c6cb;
}

.modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #721c24;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #721c24;
  cursor: pointer;
}

.modal-body {
  padding: 20px;
  font-size: 16px;
  color: #333;
}

.modal-footer {
  padding: 15px;
  background-color: #f8f9fa;
  text-align: right;
  border-top: 1px solid #dee2e6;
}

.btn-close {
  background-color: #721c24;
  color: #ffffff;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.btn-close:hover {
  background-color: #941f2d;
}
</style>
