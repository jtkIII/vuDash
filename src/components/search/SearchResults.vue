<template>
  <div class="search-results">
    <div v-if="isEmpty" class="empty">
      Start typing above to search…
    </div>

    <template v-else>
      <template v-for="(group, groupKey) in results" :key="groupKey">
        <div v-if="group.length" class="group">
          <div class="group-title">
            {{ groupKey }}
          </div>

          <ul class="items">
            <li v-for="(item, index) in group" :key="item.id || index" class="item" @click="select(groupKey, item)">
              <component :is="icons[groupKey]" class="icon" />

              <div class="content">
                <span class="item-title">{{ item.title }}</span>
                <span v-if="item.meta" class="item-meta">{{ item.meta }}</span>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import {
  User,
  MessageSquare,
  FileText,
  Link2
} from 'lucide-vue-next'

const icons = {
  Users: User,
  Messages: MessageSquare,
  Files: FileText,
  Links: Link2
}
const props = defineProps({
  results: {
    type: Object,
    default: () => ({
      Users: [],
      Messages: [],
      Files: [],
      Links: []
    })
  }
})

const emit = defineEmits(['select'])

const hoverIndex = ref(null)

const isEmpty = computed(() =>
  Object.values(props.results).every(group => group.length === 0)
)

function select(group, item) {
  emit('select', { group, item })
}
</script>

<style scoped>
.search-results {
  margin-top: 8px;
  /* background-color: var(--bg-surface); */
  /* border: 1px solid var(--border-subtle); */
  border-radius: var(--radius-md);
  max-height: 360px;
  overflow-y: auto;
}

.empty {
  padding: .33rem .66rem;
  font-size: 13px;
  color: var(--text-muted);
}

.group {
  padding: 8px 0;
}

.group-title {
  padding: 6px 12px;
  font-size: var(--txt-sm);
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-heading);
}

.items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.15s ease;
  border-bottom: 2px solid var(--border-card)
}

.item:hover {
  background-color: var(--bg-surface-active);
}

.item-title {
  font-size: var(--txt-sm);
    color: var(--text-primary);
}

.item-meta {
  font-size: var(--txt-sm);
  color: var(--text-heading);
}

.icon {
  color: var(--purple);
  flex-shrink: 0;
}

.item:hover .icon {
  color: var(--pink);
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

</style>
