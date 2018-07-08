<template lang="pug">   
  .page.about
    h2.title Страница "Обо мне"
    //button(@click="logout()") Выйти
    .about__content
      skillsRow(
        v-for="type in types"
        :key="type.name"
        :type="type"
        :skills="skills"
    )

</template>

<script>
import skillsRow from "./skillsRow";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    skillsRow
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  },
  computed: {
    ...mapState({
      skills: state => state.skills.data
    }),
    ...mapGetters(["userId"])
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions(["fetchSkills", "getUserInfo", "logout"])
  }
};
</script>

<style lang="scss">
.skills__title {
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
}

.skills__list {
  margin-bottom: 20px;
}

.skills__item {
  margin-bottom: 20px;

  &--data {
    display: flex;
  }
}

.skill__name {
  margin-right: 30px;
  width: 100px;
}

.skill__input {
  width: 50px;
  background-color: white;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-left: 25px;
  padding: 5px 0 5px 10px;
  font-family: "Roboto", Helvetica, sans-serif;

  &:first-child {
    margin-left: 0;
    width: 150px;
  }
}

.skill__percent {
  margin-left: 10px;
}
</style>
