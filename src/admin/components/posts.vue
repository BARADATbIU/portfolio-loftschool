<template lang="pug">
  .page.blog
    h2.title Страница "Блог"
    .blog__content
      h6.blog__head Добавить запись
      form.blog__form#blogForm(@submit.prevent="addPost")
        label.blog__row
          input(type="text" v-model="newPost.title" placeholder="Название").blog__input
        label.blog__row
          input(type="date" v-model="newPost.date" placeholder="Дата").blog__input
        label.blog__row
          textarea(type="text" v-model="newPost.content" placeholder="Содержание").blog__textarea
        .blog__row
          button(type="submit").btn Добавить
      ul.posts__list
        li.posts__item(v-for="post in posts" :key="post.id")
          span.post__text {{post.title}} 
          span.post__text {{post.id}}
          button.btn.btn--delete(type="button" @click="removeItem(post)") Удалить
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      newPost: {
        title: "",
        date: "",
        content: ""
      }
    }
  },
  computed: {
    ...mapState({
      posts: state => state.posts.data
    })
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts", "addNewPost", "removeExistedPost"]),
    addPost() {
      const formData = new FormData();

      Object.keys(this.newPost).forEach(prop => {
        formData.append(prop, this.newPost[prop]);
      });

      this.addNewPost(formData).then(res => {
        this.newPost.title = "";
        this.newPost.date = "";
        this.newPost.content = "";
      });
    },
    removeItem(post) {
      this.removeExistedPost(post.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.blog__head {
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}

.blog__form {
  display: flex;
  flex-direction: column;
}

.blog__row {
  max-width: 500px;
  margin-bottom: 25px;
}

.blog__input,
.blog__textarea {
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto", Helvetica, sans-serif;
}

.blog__input {
  width: 60%;
}

.blog__textarea {
  min-height: 170px;
  width: -webkit-fill-available;
}

.posts__list {
  margin-top: 20px;
}

.posts__item {
  margin-bottom: 20px;
  display: flex;
}

.post__text {
  margin-right: 30px;
  width: 100px;
}

@media (max-width: 520px) {
  .blog__input {
    width: -webkit-fill-available;
  }
}
</style>
