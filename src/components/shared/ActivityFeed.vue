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
  UserPlus
} from 'lucide-vue-next'
import { ref } from 'vue'


const emit = defineEmits(['select'])

const icons = {
  message: MessageSquare,
  file: FileText,
  link: Link2,
  user: UserPlus
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
  background-color: #1e1e1e85;
  border: 1px solid #2f2f2f;
  border-radius: 12px;
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
  background-color: #252526;
}

.item.read .text {
  color: rgba(255, 255, 255, 0.78);
}

.item.read .meta {
  color: rgba(255, 255, 255, 0.42);
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
  color: rgba(255, 255, 255, 0.6);
}

.item.unread .icon {
  color: #6366f1;
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
}

.meta {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
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
  background-color: #6366f1;
}

.read-dot {
  background-color: rgba(255, 255, 255, 0.12);
}
</style>