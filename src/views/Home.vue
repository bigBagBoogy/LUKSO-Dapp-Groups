<script setup lang="ts">
import { computed, ref } from 'vue'

import Notifications from '@/components/Notification.vue'
import Landing from '@/components/endpoints/Landing.vue'

const hasExtension = computed(() => !!window.lukso)



</script>

<template>
  <section class="section">
    <Notifications
      v-if="!hasExtension"
      :notification="{
        message: 'Please install Universal Profile browser extension.',
        type: 'warning',
      }"
      :hide-notification="true"
      class="mb-4"
    ></Notifications>
    <div class="tile is-ancestor">
      <Landing />
    </div>    
  </section>
</template>
