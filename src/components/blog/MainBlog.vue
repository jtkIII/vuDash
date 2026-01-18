<template>
  <section class="main-blog-heading">
    <div class="blog-header">
      <CardHeader title="Main Blog Section" :subtitle="`${unreadPosts.length} posts unread - out of ${posts.length} posts total`" />
      <button class="toggle-unread" @click="showUnreadOnly = !showUnreadOnly">
        {{ showUnreadOnly ? 'Show all posts' : 'Show unread only' }}
      </button>
    </div>
    <ContentSep />
  </section>

  <section class="main-blog">
    <div class="posts-grid">

      <article v-for="post in visiblePosts" :key="post.id" class="post-card">
        
        <div class="img-container">
          <img @click="selectPost(post.id)" class="post-img" :src="post.avatar" :alt="post.name" />
        </div>

        <div class="post-info">
          <div class="post-meta">
            <div class="post-header">
              <h4 class="name">
                <a @click="selectPost(post.id)"> {{ post.name }}</a>
              </h4>
              <hr />
              <span class="author">{{ post.author }}</span>
            </div>

            <button @click="toggleLike(post.id)" class="like-button">
              {{ post.likes.likedByMe ? '❤️' : '🤍' }} {{ post.likes.count }}
            </button>
          </div>
          <p class="blurb"> {{ post.blurb }} </p>
        </div>

        <ul class="tags">
          <li v-for="tag in post.tags" :key="tag">
            {{ tag }}
          </li>
        </ul>

      </article>
    </div>
  </section>
</template>

<script setup>
import ContentSep from '../shared/ContentSep.vue';
import CardHeader from '../shared/CardHeader.vue';
import { usePosts } from '@/composables/usePosts'
import { ref } from 'vue'
const emit = defineEmits(['select'])
const selectedPostId = ref(0)
const {
  posts,
  unreadPosts,
  visiblePosts,
  allTags,
  showUnreadOnly,
  markAsRead,
  toggleLike,
  filterByTag
} = usePosts()

function selectPost(id) {
  selectedPostId.value = id
  console.log("Post id:" + id)
  emit('select', id)
}

</script>

<style scoped>
.main-blog {
  padding: var(--space-md);
  margin-bottom: var(--space-fl);
}

.main-blog-heading {
  padding: var(--space-lg) 0 0 var(--space-lg);
}

.post-img {
  height: 256px;
  width: 256px;
  cursor: pointer;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-md)
}

.posts-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
  margin-bottom: var(--space-fl);
}

.post-card {
  flex: 1 1 300px;
  max-width: 400px;
  margin-bottom: var(--space-fl);
  background-color: var(--bg-light);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}

.post-card:hover {
  background-color: var(--bg-purple);
}

.author {
  font-size: var(--txt-md);
}

.name {
    cursor: pointer;
}

ul.tags {
  list-style: none;
  display: inline;
  display: flex;
  gap: 1rem;
  margin: 0 1rem 0 0;
  padding: 0;
  font-size: var(--txt-sm);
  color: var(--text-muted);
}

.post-meta, .blog-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--space-md);
}

button.like-button {
  font-size: var(--txt-sm);
}
</style>