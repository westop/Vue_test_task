<template>
    <div>

        <h1>Post list</h1>
        <Bar :data="$data" :options="$options" v-if="!isChartLoading" />
        <div v-else>Loading...</div>

        <my-input v-model="searchQuery" placeholder="Search...." v-focus />
        <div class="app__btns">
            <my-button @click="showDialog">
                Create post
            </my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost" />
        </my-dialog>
        <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostsLoading" />
        <div v-else>Loading...</div>

        <div class="page__wrapper">
            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
                'current-page': page === pageNumber
            }" @click="changePage(pageNumber)">{{ pageNumber }}
            </div>
        </div>

    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import axios from 'axios';
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        MyInput,
        MySelect,
        MyButton,
        PostList,
        PostForm,
        Bar,

    },
    data() {
        return {
            posts: [],
            comments: [],
            userAll: [],
            dialogVisible: false,
            isChartLoading: false,
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


            labels: [],
            datasets: [],
            symvolInMail: [],


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
        async fetchData() {
            try {
                this.posts = [];
                this.isChartLoading = true;
                this.isPostsLoading = true;
                const responseUser = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                const responseComments = await axios.get("http://jsonplaceholder.typicode.com/comments");
                this.comments = responseComments.data;

                this.totalPages = Math.ceil(responseUser.headers['x-total-count'] / this.limit)
                this.userAll = responseUser.data;


            } catch (e) {
                alert('error')
            } finally {
                this.userAll.forEach(userAll => {
                    let count = 0;
                    for (const step of this.comments) {
                        if (userAll.userId == step.postId) {
                            count++

                        }
                    }

                    const obj = {
                        id: (userAll.id),
                        userId: (userAll.userId),
                        totalComment: (count),
                        title: (userAll.title),
                        body: (userAll.body)
                    };
                    this.posts.push(obj);
                });

                this.comments.forEach(comments => {  
                    this.labels.push(comments.id);
                    let count = comments.email.length;
                    this.symvolInMail.push(count);
                });
                const obj = {
                        data:this.symvolInMail,
                    };
                this.datasets.push(obj);
                this.isChartLoading = false;
                this.isPostsLoading = false;
            }
        },
    },
    mounted() {
        this.fetchData();
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
            this.fetchData()
        },

    },
    options: {
        responsive: true
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
