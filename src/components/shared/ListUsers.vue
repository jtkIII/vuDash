<template>
  <div class="user-list">
    <div v-for="user in users" :key="user.id" class="user-card" :class="{ active: user.id === selectedUserId }"
      @click="selectUser(user.id)">
      
      <div class="avatar-wrapper">
        <img class="avatar" :src="user.avatar" :alt="user.name" />
        <span class="status-dot" :class="{ online: user.online, offline: !user.online }" />
      </div>

      <div class="user-info">
        <div class="user-header">
          <h3 class="name">{{ user.name }}</h3>
          <span class="position">{{ user.position }}</span>
        </div>

        <p class="blurb">
          {{ user.blurb }}
        </p>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue'

const selectedUserId = ref(null)

const users = [
  {
    id: 1,
    name: 'Jimi James',
    position: 'Digital Prophet',
    blurb: 'Envisioning the future of technology and innovation.',
    avatar: 'https://i.pravatar.cc/80?img=12',
    online: true
  },
  {
    id: 2,
    name: 'Karen Lopez',
    position: 'Security Princess',
    blurb: 'Focused on keeping the team safe.',
    avatar: 'https://i.pravatar.cc/80?img=32',
    online: false
  },
  {
    id: 3,
    name: 'Lee Liu',
    position: 'Chief Happiness Officer',
    blurb: 'A dedicated advocate for employee well-being?',
    avatar: 'https://i.pravatar.cc/80?img=45',
    online: true
  },
  {
    id: 4,
    name: 'Sam Shades',
    position: 'UX Wizard',
    blurb: 'Blending design and development seamlessly.',
    avatar: 'https://i.pravatar.cc/80?img=68',
    online: false
  },
  {
    id: 5,
    name: 'David Kendall',
    position: 'Growth Hacker',
    blurb: 'Driving user acquisition and engagement to new heights.',
    avatar: 'https://i.pravatar.cc/80?img=15',
    online: true
  },
  {
    id: 6,
    name: 'James Turner',
    position: 'Ninjaneer',
    blurb: 'Bridges frontend and backend with seamless solutions.',
    avatar: 'https://i.pravatar.cc/80?img=33',
    online: true  
  },
  {
    id: 7,
    name: 'Sophie Chen',
    position: 'Chief Vibes Officer',
    blurb: 'Cultivating a effective workplace culture.',
    avatar: 'https://i.pravatar.cc/80?img=22',
    online: false
  },
  {id: 8,
    name: 'Christopher Moltisanti',
    position: 'Capo',
    blurb: 'Takes care of business.',
    avatar: 'https://i.pravatar.cc/80?img=51',
    online: true
  }
]

const emit = defineEmits(['select'])

function selectUser(id) {
  selectedUserId.value = id
  emit('select', id)
}

</script>



<style>
.user-list {
  margin-top: .5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* User card */
.user-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

/* Hover (non-active) */
.user-card:hover:not(.active) {
  background-color: var(--bg-surface-active)
}

/* Active / selected state */
.user-card.active {
  background-color: var(--bg-surface-active);
  border-color: var(--border-subtle);
  box-shadow: 0 4px 10px var(--shadow-button);
}

/* Avatar wrapper */
.avatar-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

/* Avatar */
.avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: box-shadow 0.2s ease;
}

/* Avatar ring when active */
.user-card.active .avatar {
  box-shadow: 0 0 0 2px var(--purple)
}

/* Status dot */
.status-dot {
  position: absolute;
  bottom: -1px;
  right: -1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
}

/* Online status */
.status-dot.online {
  background-color: var(--purple);
  box-shadow: 0 0 6px rgba(94, 34, 197, 0.7);
}

/* Offline status */
.status-dot.offline {
  background-color: var(--red);
}

/* User info */
.user-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

/* Name + position row */
.user-header {
  display: flex;
  align-items: baseline;
  gap: 8px;
}

/* Name */
h3.name {
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Position */
.position {
  font-size: 13px;
  color: var(--yellow);
  white-space: nowrap;
}

.blurb {
  font-size: 13px;
  color: var(--mid);
  margin: 0;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>