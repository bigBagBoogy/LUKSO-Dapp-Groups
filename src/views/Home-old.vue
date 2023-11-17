<script setup lang="ts">
import { computed, ref } from 'vue'

import SendTransaction from '@/components/endpoints/SendTransaction.vue'
import Accounts from '@/components/endpoints/Accounts.vue'
import SetData from '@/components/endpoints/SetData.vue'
import Permissions from '@/components/endpoints/Permissions.vue'
import Assets from '@/components/endpoints/Assets.vue'
import Sign from '@/components/endpoints/Sign.vue'
import CustomRelayer from '@/components/endpoints/CustomRelayer.vue'
import Notifications from '@/components/Notification.vue'
import Transfer from '@/components/endpoints/Transfer.vue'
import ImportProfile from '@/components/endpoints/ImportProfile.vue'
import GetNetworkId from '@/components/endpoints/GetNetworkId.vue'
import Mint from '@/components/endpoints/Mint.vue'
import Landing from '@/components/endpoints/Landing.vue'

const hasExtension = computed(() => !!window.lukso)

type ComponentName = 'Accounts' | 'Assets' | 'Mint' | 'SendTransaction' | 'SetData' | 'Transfer';

const componentVisibility = ref<Record<ComponentName, boolean>>({
  Accounts: false,
  Assets: false,
  Mint: false,
  SendTransaction: false,
  SetData: false,
  Transfer: false,
})

const toggleVisibility = (componentName: ComponentName) => {
  componentVisibility.value[componentName] = !componentVisibility.value[componentName]
}

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
    <div class="tile is-ancestor">
      <button class="button is-primary mb-1" @click="toggleVisibility('Accounts')">Accounts</button>
      <Accounts v-if="componentVisibility.Accounts" />
      <button class="button is-primary mb-1" @click="toggleVisibility('Assets')">Assets</button>
      <Assets v-if="componentVisibility.Assets" />
      <button class="button is-primary mb-1" @click="toggleVisibility('Mint')">Mint</button>
      <Mint v-if="componentVisibility.Mint" />
    </div>
    <div class="tile is-ancestor">
      <button class="button is-primary mb-1" @click="toggleVisibility('Transfer')">Transfer</button>
      <Transfer v-if="componentVisibility.Transfer" />
      <button class="button is-primary mb-1" @click="toggleVisibility('SendTransaction')">SendTransaction</button>
      <SendTransaction v-if="componentVisibility.SendTransaction" />
      <button class="button is-primary mb-1" @click="toggleVisibility('SetData')">SetData</button>
      <SetData v-if="componentVisibility.SetData" />
    </div>
    <div class="tile is-ancestor">
      <!-- Add other components here -->
    </div>
  </section>
</template>
