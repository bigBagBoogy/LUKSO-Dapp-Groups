<!-- src/views/Home.vue -->
<script setup lang="ts">
import { computed, ref, watch, inject } from 'vue'

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
const showAccounts = ref(false)
const showAssets = ref(false)
const showMint = ref(false)
const showSendTransaction = ref(false)
const showSetData = ref(false)  
const showTransfer = ref(false) 

const toggleAccounts = () => {
  showAccounts.value = !showAccounts.value;
};
const toggleAssets = () => {
  showAssets.value = !showAssets.value;
};
const toggleMint = () => {
  showMint.value = !showMint.value;
};
const toggleSendTransaction = () => {
  showSendTransaction.value = !showSendTransaction.value;
};
const toggleSetData = () => {
  showSetData.value = !showSetData.value;
};
const toggleTransfer = () => {
  showTransfer.value = !showTransfer.value;
};


</script>

<template>
  <section class="section">
    <Notifications
      v-if="!hasExtension"
      :notification="{
        message: 'Please instal Universal Profile browser extension.',
        type: 'warning',
      }"
      :hide-notification="true"
      class="mb-4"
    ></Notifications>
    <div class="tile is-ancestor">
      <Landing />
      <!-- <Permissions />
      <CustomRelayer />
      <ImportProfile /> -->
    </div>
    <div class="tile is-ancestor">
      <button :class="`button is-primary mb-1`" @click="toggleAccounts">Accounts</button>
      <Accounts v-if="showAccounts" />
      <button :class="`button is-primary mb-1`" @click="toggleAssets">Assets</button>
      <Assets v-if="showAssets" />
      <button :class="`button is-primary mb-1`" @click="toggleMint">Mint</button>
      <Mint v-if="showMint" />
    </div>
    <div class="tile is-ancestor">  
      <button :class="`button is-primary mb-1`" @click="toggleTransfer">Transfer</button>
      <Transfer v-if="showTransfer" />
      <button :class="`button is-primary mb-1`" @click="toggleSendTransaction">SendTransaction</button>
      <SendTransaction v-if="showSendTransaction" />
      <button :class="`button is-primary mb-1`" @click="toggleSetData">SetData</button>
      <SetData v-if="showSetData" />
    </div>
      
    <div class="tile is-ancestor">
      <!-- <Sign />
      <GetNetworkId /> -->
    </div>
  </section>
</template>
