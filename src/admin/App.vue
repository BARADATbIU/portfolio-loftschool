<template lang="pug">
  #root
    header.header
      router-view(name="header")
    nav.tabs
      router-view(name="tabs")
    main.main-content
      router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";

import { mapActions, mapState, mapGetters } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700&subset=cyrillic");

:root {
  font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    font-size: 14px;
  }
}

body,
html {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 300;
  line-height: 1.42;
  color: #455a64;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper,
#root {
  height: 100%;
}

#root {
  background-image: url("../assets/images/bg/admin-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

::selection {
  background-color: rgba(#00bfa5, 0.7);
}

label,
button,
input,
textarea,
select {
  cursor: pointer;
}

.nav {
  background-color: #f0efe9;
}

.main-content {
  padding: 0 25px;
}

.page {
  height: 100%;
  padding-top: 45px;
}

.title {
  font-size: 21px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 45px;
}

.btn {
  background-color: #00bfa5;
  color: white;
  padding: 12px 15px;
  font-weight: 500;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  margin: 25px 0 0 25px;

  &:hover {
    background-color: #008b79;
  }

  &--delete {
    background-color: lightcoral;
    font-weight: 300;
    padding: 5px;
    margin-top: 0;

    &:hover {
      background-color: red;
    }
  }
}
</style>
