<template lang="pug">
  #tabs
    ul.tabs
      li.item(v-for="tab in tabs")
        router-link(
          :to="tab.href"
        ).link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/skills" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/posts" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#tabs {
  background: #f0efe9;
}

.item {
  border-right: 2px solid #fff;
}

.link {
  display: block;
  color: #455a64;
  text-decoration: none;
  padding: 20px 70px;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover,
  &.active {
    background-color: white;
    color: #00bfa5;
  }
}

.tabs {
  display: flex;
  font-weight: 500;
}

@media (max-width: 520px) {
  .tabs {
    flex-direction: column;
  }

  .item {
    width: 100%;
    border-right: none;
    border-bottom: 2px solid white;
    align-self: stretch;

    &:last-child {
      border-bottom: none;
    }
  }

  .link {
    text-align: center;
  }
}
</style>
