import Vue from "vue";
import axios from "axios";

new Vue({
  el: "#posts-component",
  data: {
    posts: []
  },
  created() {
    axios.get("http://webdev-api.loftschool.com/posts/6").then(response => {
      this.posts = response.data;
    });
  },
  methods: {
    dataView(time) {
      let myTime = new Date(time * 1000).toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
      return myTime;
    }
  },
  template: "#posts"
});
