<template>
  <div class="activity-feed">


    <ul class="list">
      <li v-for="activity in activities" :key="activity.id" class="item"
        :class="{ unread: activity.unread, read: !activity.unread }" @click="select(activity)">
        <!-- Avatar -->
        <img v-if="activity.user?.avatar" :src="activity.user.avatar" :alt="activity.user.name" class="avatar" />

        <!-- Icon -->
        <component :is="icons[activity.type]" class="icon" />

        <!-- Content -->
        <div class="content">
          <div class="text">
            {{ activity.title }}
          </div>
          <div class="meta">
            {{ activity.meta }} · {{ activity.time }}
          </div>
        </div>

        <!-- Unread / read dot -->
        <span v-if="activity.unread" class="unread-dot" />
        <span v-else class="read-dot" />
      </li>
    </ul>
  </div>
</template>


<script setup>
import {
  MessageSquare,
  FileText,
  Link2,
  UserPlus,
  Video
} from 'lucide-vue-next'
import { ref } from 'vue'


const emit = defineEmits(['select'])

const icons = {
  message: MessageSquare,
  file: FileText,
  link: Link2,
  user: UserPlus,
  video: Video
}

/* Mock data */
const activities = ref([
  {
    id: 1,
    type: 'message',
    title: 'Alex sent a message',
    meta: '“Can you review this?”',
    time: '2h ago',
    unread: true,
    user: {
      name: 'Alex',
      avatar: 'https://i.pravatar.cc/32?img=3'
    }
  },
  {
    id: 2,
    type: 'file',
    title: 'Wireframes uploaded',
    meta: 'dashboard.fig',
    time: '4h ago',
    unread: false,
    user: {
      name: 'Maria',
      avatar: 'https://i.pravatar.cc/32?img=5'
    }
  },
  {
    id: 3,
    type: 'link',
    title: 'Project roadmap shared',
    meta: 'Notion link',
    time: 'Yesterday',
    unread: true,
    read: false,
    user: null
  },
  {
    id: 4,
    type: 'user',
    title: 'Sam joined the team',
    meta: 'Backend Developer',
    time: '2 days ago',
    unread: true,
    user: {
      name: 'Sam',
      avatar: 'https://i.pravatar.cc/32?img=8'
    }
  },
  {
    id: 5,
    type: 'message',
    title: 'Linda sent a message',
    meta: '“Sprint planning notes.”',
    time: '3 days ago',
    unread: false,
    user: {
      name: 'Linda',
      avatar: 'https://i.pravatar.cc/32?img=10'
    },
  },
  {
    id: 6,
    type: 'file',
    title: 'Budget report uploaded',
    meta: 'budget-2024.xlsx',
    time: 'Last week',
    unread: true,
    user: {
      name: 'Tom',
      avatar: 'https://i.pravatar.cc/32?img=12'
    }
  },
    {
    id: 7,
    type: 'video',
    title: 'The New Hotness',
    meta: 'hot.mp4',
    time: 'Last week',
    unread: true,
    user: {
      name: 'Christopher',
      avatar: 'https://i.pravatar.cc/32?img=51s'
    }
  }
])

function select(activity) {
  if (activity.unread) {
    activity.unread = false
  }

  emit('select', activity)
}
</script>


<style scoped>
.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.activity-feed {
  background-color: var(--bg-list);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 12px
}

.item {
  display: flex;
  align-items: left;
  gap: 10px;
  padding: 8px;
  margin: 10px 0;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
}

.item:hover {
  background-color: #202020;
  border-color: #58508d45;
  box-shadow: 0 4px 10px rgba(165, 99, 241, 0.15);
}

.item.unread {
  background-color: rgba(99, 101, 241, 0.055);
}

.item.read {
  background-color: var(--bg-surface);
}

.item.read .text {
  color: var(--text-heading);
}

.item.read .meta {
  color: var(--text-secondary);
}

/* Avatar */
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

/* Icon */
.icon {
  width: 16px;
  height: 16px;
  color: var(--mid);
}

.item.unread .icon {
  color: var(--purple);
}

/* Content */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.text {
  font-size: 13px;
  color: var(--text-heading);
}

.meta {
  font-size: 12px;
  color: var(--text-secondary);
}

/* Unread / read dot */
.unread-dot,
.read-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 6px;
  align-self: center;
  flex-shrink: 0;
}

.unread-dot {
  background-color: var(--purple);
}

.read-dot {
  background-color: rgba(255, 255, 255, 0.12);
}
</style>