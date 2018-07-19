import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#menu-component",
  data: {
    posts: []
  },
  created() {
    axios.get("https://webdev-api.loftschool.com/posts/6").then(response => {
      this.posts = response.data;
    });
  },
  template: "#menu"
});
