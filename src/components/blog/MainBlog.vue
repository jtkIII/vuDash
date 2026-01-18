<template>
  <section class="main-blog-heading">
    <CardHeader title="Main" :subtitle="`${unreadPosts.length} posts unread - out of ${posts.length} posts total`" />
    <ContentSep />
  </section>
  <section class="main-blog">
    <div class="posts-grid">
      <div v-for="post in posts" :key="post.id" class="post-card" @click="selectPost(post.id)">

        <img class="post-img" :src="post.avatar" :alt="post.name" />

        <div class="post-info">
          <div class="post-header">
            <h4 class="name">
              <a @click="selectPost(post.id)"> {{ post.name }}</a>
            </h4>
            <span class="author">{{ post.author }}</span>
          </div>
          <p class="blurb"> {{ post.blurb }} </p>
        </div>

      </div>
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
  toggleLike,
  markAsRead
} = usePosts()

function selectPost(id) {
  selectedPostId.value = id
  console.log("Post id:" + id)
  emit('select', id)
}

</script>

<style scoped>
.main-blog{
  padding: var(--space-lg);
  margin-bottom: var(--space-fl);
}
.main-blog-heading{
  padding: var(--space-lg) 0 0 var(--space-lg);
}
.post-img {
  height: 256px;
  width: 256px;
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
  cursor: pointer;
  background-color: var(--bg-light);
  padding: var(--space-md);
  border-radius: var(--radius-md);
}
.post-card:hover{
  background-color: var(--bg-purple);
}
.author{
  font-size: var(--txt-md);
}
</style>