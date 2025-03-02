<script setup lang="ts">
import { getState } from '@/stores'
import Notifications from '@/components/Notification.vue'
import useNotifications from '@/compositions/useNotifications'
import { ref } from 'vue'

const { notification, clearNotification, hasNotification, setNotification } =
  useNotifications()
const key = ref(
  '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'
) // key hash of LSP3Profile
const value = ref(
  '0x6f357c6a32f2cf55bde7f2cdf315fe1f2246832b5de988df953c99e4b0c659e3b8525d95697066733a2f2f516d57787a6d37545264466b76767075744239714b336a5975324644436655594a6e344d74374463636f747a3659'
) // encoded profile ipfs url
const isPending = ref(false)


const setData = async () => {
  clearNotification()
  const erc725AccountAddress = getState('address')

  try {
    isPending.value = true
    window.erc725Account &&
      (await window.erc725Account.methods
        .setDataBatch([key.value], [value.value])
        .send({
          from: erc725AccountAddress,
        })
        .on('receipt', function (receipt: any) {
          console.log(receipt)
        })
        .once('sending', (payload: any) => {
          console.log(JSON.stringify(payload, null, 2))
        }))

    setNotification(`Set data`, 'info')
  } catch (error) {
    setNotification((error as unknown as Error).message, 'danger')
  } finally {
    isPending.value = false
  }
}
</script>

<template>
<div class="tile is-4 is-parent">
      <div class="tile is-child box">
      <p class="is-size-5 has-text-weight-bold mb-4">Change Data</p>
      <div class="field">
        <label class="label">Key</label>
        <div class="control">
          <input v-model="key" class="input is-family-code" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Value</label>
        <div class="control">
          <input v-model="value" class="input is-family-code" type="text" />
        </div>
      </div>
      <div class="field">
        <button
          :class="`button is-primary mb-1 ${
            isPending ? 'is-loading' : ''
          }`"
          data-testid="setData"
          @click="setData"
        >
          Set data
        </button>
      </div>

      <div class="field">
        How to
        <a href="https://docs.lukso.tech/guides/universal-profile/edit-profile"
          >edit a Universal Profile tutorial</a
        >.
      </div>

      <div class="field">
        <Notifications
          v-if="hasNotification"
          :notification="notification"
          class="mt-4"
          @hide="clearNotification"
        ></Notifications>
      </div>
    </div>
  </div>
</template>
