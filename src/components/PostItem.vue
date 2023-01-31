<template>
  <div class="post">
    <div>
      <div> <strong>#:</strong>{{ post.id }} </div>
      <div><strong>Nick Name:</strong>{{ post.userId }}</div>
      <div><strong>Total comments:</strong>{{ post.totalComment }}</div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Text:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">
        Открыть
      </my-button>
      <my-button @click="$emit('remove', post)">
        Удалить
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__btns {
  display: flex;
}
</style>
