<script setup>
import { computed, ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import SettingsRow from '@/components/settings/SettingsRow.vue'
import SettingToggle from '@/components/settings/SettingToggle.vue'
import SettingsSection from '@/components/settings/SettingsSection.vue'
import SettingsSelect from '@/components/settings/SettingsSelect.vue'
import SettingInput from '@/components/settings/SettingInput.vue'
import SettingAction from '@/components/settings/SettingAction.vue'
import SettingsFooter from '@/components/settings/SettingsFooter.vue'
import { useDirtyState } from '@/composables/useDirtyState'


const settings = ref({
  notifications: true,
  theme: 'dark',
  username: 'Jtk',
})

const {
  dirty,
  commit,
  reset
} = useDirtyState(settings)

onBeforeRouteLeave(() => {
  if (!dirty.value) return true

  return window.confirm(
    'You have unsaved changes. Leave without saving?'
  )
})


const original = JSON.stringify(settings.value)

// const dirty = computed(() =>
//   JSON.stringify(settings.value) !== original
// )

function save() {
  Object.assign(settings.value, JSON.parse(JSON.stringify(settings.value)))
}

function cancel() {
  settings.value = JSON.parse(original)
}

const notificationsEnabled = ref(true)
const emailUpdates = ref(false)
const theme = ref('dark')
const username = ref('Jtk')
const crypto = ref('bitcoin')

const resetSettings = () => {
  notificationsEnabled.value = false
  emailUpdates.value = false
  theme.value = 'dark'
  username.value = ''
  crypto.value = 'bitcoin'
}

const clearCache = () => {
  alert('Cache cleared!')
}

</script>

<template>
  <SettingsSection title="Notifications" description="Control how and when the app notifies you">

    <SettingsRow label="Username" description="This will be visible to other users">
      <SettingInput v-model="username" placeholder="Enter username" />
    </SettingsRow>

    <SettingsRow label="Enable notifications" description="Allow system notifications">
      <SettingToggle v-model="notificationsEnabled" />
    </SettingsRow>

    <SettingsRow label="Email updates" description="Receive weekly summaries">
      <SettingToggle v-model="emailUpdates" />
    </SettingsRow>

    <SettingsRow label="Theme" description="Choose your preferred appearance">
      <SettingsSelect v-model="theme" :options="[
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
        { value: 'system', label: 'System' }
      ]" />
    </SettingsRow>

    <SettingsRow label="Crypto" description="Choose your preferred Crypto">
      <SettingsSelect v-model="crypto" :options="[
        { value: 'bitcoin', label: 'Bitcoin' },
        { value: 'ethereum', label: 'Ethereum' },
        { value: 'solana', label: 'Solana' }
      ]" />
    </SettingsRow>

    <SettingsRow label="Clear cache" description="Remove locally stored temporary data">
      <SettingAction @click="clearCache">
        Clear Local Data
      </SettingAction>
    </SettingsRow>

    <SettingsRow label="Reset settings" description="Restore all settings to their default values">
      <SettingAction variant="danger" @click="resetSettings">
        Reset Settings
      </SettingAction>
    </SettingsRow>

  </SettingsSection>
  <SettingsFooter :dirty="dirty" @save="save" @cancel="cancel" />
</template>
