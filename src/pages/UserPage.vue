<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...." v-focus />
    <div class="app__btns">
      <my-button @click="showDialog">
        Создать пользователя
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list :posts="sortedAndSearchedPosts" @getComent="userComment" @remove="removePost" v-if="!isPostsLoading" />
    <div v-else>Идет загрузка...</div>

    <div class="page__wrapper">
      <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
        'current-page': page === pageNumber
      }" @click="changePage(pageNumber)">{{ pageNumber }}
      </div>
    </div>
    <div v-if="!isPostsLoading" v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    PostList, PostForm
  },
  data() {
        return {
            posts: [],
            comments: [],
            userAll: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: 'title', name: 'At title' },
                { value: 'body', name: 'At body' },
            ],
            userComment: [],
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const responsePosts = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPages = Math.ceil(responsePosts.headers['x-total-count'] / this.limit)
                this.posts = responsePosts.data;
            } catch (e) {
                alert('error')
            } finally {
                this.isPostsLoading = false;
            }
        },
        async getData() {
            try {
                const responseComments = await axios.get("http://jsonplaceholder.typicode.com/comments");
                this.comments = responseComments.data;
                const responseUser = await axios.get("https://jsonplaceholder.typicode.com/posts");
                this.userAll = responseUser.data;
            } catch (error) {
                console.log(error);
            }
            this.userAll.forEach(userAll => {
                let count = 0;
                for (const step of this.comments) {
                    if (userAll.userId == step.postId) {
                        count++
                        console.log(count)
                    }
                }
//this.posts[]
                const obj = {
                    user: (userAll.userId),
                    totalComment: (count),
                };
                this.userComment.push(obj)
                this.posts[0].passports = (count)
            })
           console.log(this.userComment);
        },
        getComent() {

        },
        getMassive() {
            // this.comments.id.forEach( comments => {console.log(this.comments.postId)});
            // this.userAll.forEach( userAll => {console.log(userAll.userId)});
           
            //  for (const step of this.comments) {
            //      console.log(step.postId)
            //  }
        }
    },
    mounted() {
        this.fetchPosts();
        this.getData();
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) =>
                post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            )
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
    },
    watch: {
        page() {
            this.fetchPosts()
        }
    }
}
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  height: 30px;
  background: green;
}
</style>
