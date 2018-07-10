<template lang="pug">
  li.skills__item.skills__item--data(v-if="!editmode")
    span.skill__name {{skill.title}} 
    span.skill__percent {{skill.percents}} %
    button.btn.btn--delete(type="button" @click="removeItem") Удалить

  li.skills__item(v-else)
      input(
        type="text" 
        placeholder="Течнология"
        v-model="newSkill.title"
      ).skill__input
      input(
        type="number" 
        min="0" max="100" step="10"
        v-model="newSkill.percents"
      ).skill__input
      span.skill__percent %
      button(type="button" @click="addSkill").btn Добавить
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill", "removeExistedSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill).then(res => {
        this.newSkill.title = "";
        this.newSkill.percents = "";
      });
    },
    removeItem() {
      this.removeExistedSkill(this.skill.id);
    }
  }
};
</script>
