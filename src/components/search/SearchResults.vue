<template>
  <div class="search-results">
    <!-- Empty state -->
    <div v-if="isEmpty" class="empty">
      Start typing above to search…
    </div>

    <!-- Groups -->
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
  background-color: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  max-height: 360px;
  overflow-y: auto;
}

/* Empty state */
.empty {
  padding: .33rem .66rem;
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
}

/* Group */
.group {
  padding: 8px 0;
}

.group-title {
  padding: 6px 12px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--text-heading);
}

/* Items */
.items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.item {
  display: flex;
  flex-direction: row; /* <-- key change */
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.item:hover {
  background-color: #252526;
}

.item-title {
  font-size: 13px;
    color: var(--text-primary);
}

.item-meta {
  font-size: 12px;
  color: var(--text-heading);
}


.icon {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  color: var(--purple);
  flex-shrink: 0;
}

.item:hover .icon {
  color: #6366f1;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

</style>