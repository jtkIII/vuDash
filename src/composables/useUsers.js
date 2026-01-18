import { ref } from 'vue'

const users = ref([
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
    name: 'Sophie Chen',
    position: 'Chief Vibes Officer',
    blurb: 'Cultivating a effective workplace culture.',
    avatar: 'https://i.pravatar.cc/80?img=22',
    online: false
  },
  {id: 5,
    name: 'Christopher Moltisanti',
    position: 'Capo',
    blurb: 'Takes care of business.',
    avatar: 'https://i.pravatar.cc/80?img=51',
    online: true
  },
  {
    id: 6,
    name: 'Sam Shades',
    position: 'UX Wizard',
    blurb: 'Blending design and development seamlessly.',
    avatar: 'https://i.pravatar.cc/80?img=68',
    online: false
  },
  {
    id: 7,
    name: 'David Kendall',
    position: 'Growth Hacker',
    blurb: 'Driving user acquisition and engagement to new heights.',
    avatar: 'https://i.pravatar.cc/80?img=15',
    online: true
  },
  {
    id: 8,
    name: 'James Turner',
    position: 'Ninjaneer',
    blurb: 'Bridges frontend and backend with seamless solutions.',
    avatar: 'https://i.pravatar.cc/80?img=33',
    online: true  
  },
  
    {id: 9,
    name: 'Jane Jetts',
    position: 'E Evangelist',
    blurb: 'Personal testimony, and outreach.',
    avatar: 'https://i.pravatar.cc/80?img=49',
    online: true
  }
])

export function useUsers() {

  function getUserById(id) {
    return users.value.find(u => u.id === id)
  }

  function setUsers(newUsers) {
    users.value = newUsers
  }

  return {
    users,
    getUserById,
    setUsers
  }
}