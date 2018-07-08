<template lang="pug">
  .skills
    h6.skills__title {{type.name}}
    ul.skills__list
      skill-item(
        v-for="skill in skills"
        v-if="skill.category === type.id"
        :key="skill.id"
        :skill="skill"
      )
      skill-item(
        :editmode="true"
        :typeId="type.id"
      )
</template>

<script>
import skillItem from "./skillItem";

export default {
  components: {
    skillItem
  },
  props: {
    type: {
      type: Object,
      default: () => {}
    },
    skills: {
      type: Array,
      default: () => []
    }
  },
  mehtods: {
    fromNameToNum(name) {
      switch (name) {
        case "Frontend":
          return 0;
        case "Backend":
          return 1;
        case "Workflow":
          return 2;
      }
    }
  }
};
</script>
