<template>
  <div class="leaderboard">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Rating</th>
          <th>Trend</th>
        </tr>
      </thead>

      <TransitionGroup tag="tbody" name="reorder">
        <tr v-for="(item, index) in items" :key="item.id" @dragover.prevent @drop="onDrop(index)"
          :class="{ dragging: index === draggingIndex }">
          <!-- Handle -->
          <td class="handle-cell">
            <span class="drag-handle" draggable="true" @dragstart="onDragStart(index)">
              <GripVertical :size="22" class="handle-icon" />
            </span>
          </td>

          <td data-label="Name">
            <div class="name">
              <component :is="icons[item.type]" class="icon" />
              <a :href="item.link">{{ item.name }}</a>
            </div>
          </td>

          <td data-label="Rating">
            <span :class="item.rating > 80 ? 'trend-up' : 'trend-down'">
              {{ item.rating }}
            </span>
          </td>

          <td data-label="Trend">
            <span class="trend" :class="item.trend">
              <!-- {{ item.trend === 'up' ? '▲' : '▼' }} -->
              <component :is="icons[item.trend]" class="icon" />
            </span>
          </td>
        </tr>
      </TransitionGroup>
    </table>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue'
import {
  MessageSquare,
  FileText,
  Link2,
  UserPlus,
  ArrowUpCircle,
  ArrowDownCircle,
  GripVertical,
} from 'lucide-vue-next'

const icons = {
  message: MessageSquare,
  file: FileText,
  link: Link2,
  user: UserPlus,
  up: ArrowUpCircle,
  down: ArrowDownCircle
}
const emit = defineEmits(['update:order'])

const items = ref([
  { id: 1, name: 'Latest Update - Brian Johnson', rating: 98, trend: 'up', link: '#', type: 'message' },
  { id: 2, name: 'Document - Dave Smith', rating: 92, trend: 'down', link: '#', type: 'file' },
  { id: 3, name: 'The Latest Files - Chris Lee', rating: 87, trend: 'up', link: '#', type: 'link' },
  { id: 4, name: 'New User - Diana Prince', rating: 85, trend: 'down', link: '#', type: 'user' },
  { id: 5, name: 'Whats up -Ethan Hunt', rating: 80, trend: 'up', link: '#', type: 'message' },
  { id: 6, name: 'New Audio - Jimmy Page', rating: 78, trend: 'down', link: '#', type: 'file' },
  { id: 7, name: 'New File - George Martin', rating: 75, trend: 'up', link: '#', type: 'link' },
  { id: 8, name: 'New User - Hannah Brown', rating: 72, trend: 'up', link: '#', type: 'user' },
  { id: 9, name: 'Hi Guys - Ian Crossland', rating: 70, trend: 'down', link: '#', type: 'message' },
  { id: 10, name: 'Resume - Jenna Fischer', rating: 68, trend: 'up', link: '#', type: 'file' },
  { id: 11, name: 'Att - Kevin Soprano', rating: 65, trend: 'down', link: '#', type: 'link' },
  { id: 12, name: 'New User - Laura Palmer', rating: 62, trend: 'up', link: '#', type: 'user' },
])

const draggingIndex = ref(null)

function onDragStart(index) {
  draggingIndex.value = index
}

function onDrop(dropIndex) {
  if (draggingIndex.value === null) return
  const moved = items.value.splice(draggingIndex.value, 1)[0]
  items.value.splice(dropIndex, 0, moved)
  draggingIndex.value = null
}

/* 🔥 Auto-persist */
watch(
  items,
  (newOrder) => {
    emit('update:order', newOrder)
  },
  { deep: true }
)
</script>


<style scoped>
.leaderboard {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  overflow: hidden;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  font-size: 11px;
  text-transform: uppercase;
  color: var(--mid);
  padding: 10px 12px;
  text-align: left;
}

td {
  padding: 10px 12px;
  font-size: 14px;
}

/* Rows */
tbody tr {
  transition: background-color 0.15s ease;
  border: 1px solid transparent;
}

tbody tr:hover {
  background-color: var(--bg-surface-active);
  border: 1px solid var(--border-subtle);
}

tbody tr.dragging {
  opacity: 0.5;
}

/* Drag handle */
.handle-cell {
  width: 40px;     /* ← THIS is critical */
  text-align: center;
}

.drag-handle {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
}

.handle-icon {
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
  color: var(--mid);
  transition: color 0.15s ease, transform 0.15s ease;
}

.drag-handle:hover .handle-icon {
  color: var(--purple);
  transform: scale(1.1);
}

tbody tr:hover{
  color: var(--bg-hover);
}

/* Trend */
.trend {
  font-size: 12px;
}

.trend-up {
  color: #ffa600;
}

.trend-down {
  color: #ff6361;
}

/* Links */
a {
  color: var(--purple);
  text-decoration: none;
}
a:hover {
  color: #bc5090;
  text-decoration: underline;
}

/* Icon */
.icon {
  width: 18px;
  height: 18px;
  color: var(--mid);
  display: inline-block;
}

.name {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* ---------- Mobile stacking ---------- */
@media (max-width: 640px) {

  table,
  thead,
  tbody,
  th,
  tr,
  td {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    border-bottom: 1px solid var(--border-subtle);
    padding: 8px 0;
  }

  td {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 6px 12px;
  }

  td::before {
    content: attr(data-label);
    font-size: 11px;
    text-transform: uppercase;
    color: var(--mid);
  }

  .handle-cell {
    display: none;
  }
}
</style>
