<template>
  <component v-if="modal" :is="modal.component" v-bind="modal.props" />
</template>

<script setup>
import { modal } from '@/composables/useModal'
</script>
