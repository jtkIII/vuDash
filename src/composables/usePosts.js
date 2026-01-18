import { ref, computed } from 'vue'

const posts = ref([
  {
    id: 1,
    name: 'Digital Prophecies',
    author: 'Jane Jetts',
    date: '2026-01-18T00:39:39',
    blurb: 'Envisioning the future of technology and innovation.',
    avatar: 'https://images.unsplash.com/photo-1756142753931-87538d2c8cf4?q=80&w=800',
    read: true,
    tags: ['future', 'technology', 'innovation'],
    likes: { count: 24, likedByMe: true },
    comments: { count: 6 }
  },
  {
    id: 2,
    name: 'Midnight Systems',
    author: 'Alex Moreno',
    date: '2026-01-19T03:12:08',
    blurb: 'Exploring how resilient architectures thrive under pressure.',
    avatar: 'https://plus.unsplash.com/premium_photo-1686218921810-5aa724a04601?q=80&w=754&auto=format&fit=crop',
    read: false,
    tags: ['architecture', 'systems', 'resilience'],
    likes: { count: 12, likedByMe: false },
    comments: { count: 3 }
  },
  {
    id: 3,
    name: 'Human Interfaces',
    author: 'Lena Park',
    date: '2026-01-20T14:45:22',
    blurb: 'Designing interactions that feel intuitive, inclusive, and human.',
    avatar: 'https://images.unsplash.com/photo-1615406839587-0276084b72bb?q=80&w=800&auto=format&fit=crop',
    read: false,
    tags: ['design', 'ux', 'accessibility'],
    likes: { count: 31, likedByMe: false },
    comments: { count: 9 }
  },
  {
    id: 4,
    name: 'Signals & Noise',
    author: 'Marcus Vale',
    date: '2026-01-21T09:07:54',
    blurb: 'Learning to extract meaning from overwhelming streams of data.',
    avatar: 'https://images.unsplash.com/photo-1720962158813-29b66b8e23e1?q=80&w=800&auto=format&fit=crop',
    read: true,
    tags: ['data', 'analytics', 'insight'],
    likes: { count: 18, likedByMe: true },
    comments: { count: 4 }
  },
  {
    id: 5,
    name: 'Synthetic Futures',
    author: 'Rina Solis',
    date: '2026-01-22T18:29:11',
    blurb: 'Where artificial intelligence meets creative intention.',
    avatar: 'https://images.unsplash.com/photo-1598209494655-b8e249540dfc?q=80&w=774&auto=format&fit=crop',
    read: false,
    tags: ['ai', 'creativity', 'ethics'],
    likes: { count: 42, likedByMe: false },
    comments: { count: 11 }
  },
  {
    id: 6,
    name: 'Latency Matters',
    author: 'Tomáš Novak',
    date: '2026-01-23T11:54:36',
    blurb: 'Why performance details shape user trust and experience.',
    avatar: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1934&auto=format&fit=crop',
    read: true,
    tags: ['performance', 'web', 'engineering'],
    likes: { count: 15, likedByMe: true },
    comments: { count: 2 }
  },
  {
    id: 7,
    name: 'Quiet Complexity',
    author: 'Nora Whitfield',
    date: '2026-01-24T22:16:03',
    blurb: 'Building systems that are powerful without being loud.',
    avatar: 'https://images.unsplash.com/photo-1536695097251-2626b7d1e319?q=80&w=1862&auto=format&fit=crop',
    read: false,
    tags: ['simplicity', 'systems', 'design'],
    likes: { count: 27, likedByMe: false },
    comments: { count: 7 }
  },
  {
    id: 8,
    name: 'Quite a Spectacle',
    author: 'Tony Romo',
    date: '2026-01-24T22:16:03',
    blurb: 'If there is just an example of things, then this would be one of them',
    avatar: 'https://images.unsplash.com/photo-1638038988551-28155572ce41?q=80&w=800&auto=format&fit=crop',
    read: false,
    tags: ['example', 'temp', 'spectacle'],
    likes: { count: 7, likedByMe: false },
    comments: { count: 3 }
  },
  {
    id: 9,
    name: 'Make an Example',
    author: 'Vito Sapola',
    date: '2026-01-25T22:16:03',
    blurb: 'Sometimes its the only way to get your point across.',
    avatar: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    read: true,
    tags: ['example', 'point', 'post'],
    likes: { count: 11, likedByMe: false },
    comments: { count: 6 }
  },
  {
    id: 10,
    name: 'The Long Way Around',
    author: 'Evan Calder',
    date: '2026-01-26T09:41:18',
    blurb: 'Detours often reveal more than the straight path ever could.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    read: false,
    tags: ['process', 'learning', 'growth'],
    likes: { count: 19, likedByMe: false },
    comments: { count: 4 }
  },
  {
    id: 11,
    name: 'Small Decisions, Big Impact',
    author: 'Marisa Chen',
    date: '2026-01-26T17:08:52',
    blurb: 'Why the tiniest choices in systems design matter the most.',
    avatar: 'https://images.unsplash.com/photo-1761864293840-cf73a186bff8?q=80&w=800&auto=format&fit=crop',
    read: true,
    tags: ['systems', 'design', 'decisions'],
    likes: { count: 27, likedByMe: true },
    comments: { count: 8 }
  },
  {
    id: 12,
    name: 'When Less Is Enough',
    author: 'Julian Frost',
    date: '2026-01-27T11:32:05',
    blurb: 'Resisting complexity can be the most disciplined choice.',
    avatar: 'https://images.unsplash.com/photo-1768651122072-8f1843752172?q=80&w=734&auto=format&fit=crop',
    read: false,
    tags: ['simplicity', 'minimalism', 'engineering'],
    likes: { count: 14, likedByMe: false },
    comments: { count: 3 }
  }

])

const showUnreadOnly = ref(false)


/* --------- computed helpers --------- */

const unreadPosts = computed(() =>
  posts.value.filter(p => !p.read)
)

const allTags = computed(() => {
  const set = new Set()
  posts.value.forEach(p => p.tags.forEach(tag => set.add(tag)))
  return [...set]
})

const visiblePosts = computed(() =>
  showUnreadOnly.value ? unreadPosts.value : posts.value
)

/* --------- actions --------- */

function markAsRead(postId) {
  const post = posts.value.find(p => p.id === postId)
  if (post) post.read = true
}

function toggleLike(postId) {
  const post = posts.value.find(p => p.id === postId)
  if (!post) return

  post.likes.likedByMe = !post.likes.likedByMe
  post.likes.count += post.likes.likedByMe ? 1 : -1
}

function filterByTag(tag) {
  return posts.value.filter(p => p.tags.includes(tag))
}

/* --------- composable API --------- */

export function usePosts() {
  return {
    posts,
    unreadPosts,
    visiblePosts,
    allTags,
    showUnreadOnly,
    markAsRead,
    toggleLike,
    filterByTag
  }
}