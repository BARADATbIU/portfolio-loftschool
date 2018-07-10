<template lang="pug">
  .page.works
    h2.title Страница "Мои работы"
    .works__content
      h6.works__head Добавить работу
      form.works__form#worksForm(@submit.prevent="addWork")
        label.works__row
          input(type="text" v-model="newWork.title" placeholder="Название проетка").works__input
        label.works__row
          input(type="text" v-model="newWork.techs" placeholder="Технологии").works__input
        label.works__row
          input(type="text" v-model="newWork.link" placeholder="Ссылка").works__input
        label.works__row
          span.works__desc Загрузить картинку
          input(type="file" @change="addPhoto").works__file
        .works__row
          button(type="submit").btn Добавить
      ul.works__list
        li.works__item(v-for="work in works" :key="work.id")
          span.work__text {{work.title}} 
          span.work__text {{work.link}}
          button.btn.btn--delete(type="button" @click="removeItem(work)") Удалить
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      newWork: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  computed: {
    ...mapState({
      works: state => state.works.data
    })
  },
  created() {
    this.fetchWorks();
  },
  methods: {
    ...mapActions(["fetchWorks", "addNewWork", "removeExistedWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;

      this.newWork.photo = files[0];
    },
    addWork() {
      const formData = new FormData();

      Object.keys(this.newWork).forEach(prop => {
        formData.append(prop, this.newWork[prop]);
      });

      this.addNewWork(formData).then(res => {
        this.newWork.title = "";
        this.newWork.techs = "";
        this.newWork.link = "";
      });
    },
    removeItem(work) {
      this.removeExistedWork(work.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.works__head {
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}

.works__form {
  display: flex;
  flex-direction: column;
}

.works__row {
  max-width: 300px;
  margin-bottom: 25px;
}

.works__input {
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto", Helvetica, sans-serif;
  width: -webkit-fill-available;
}

.works__file {
  display: none;
}

.works__desc {
  color: #00bfa5;
  margin-left: 50px;
  font-weight: 500;
  display: flex;

  &::after {
    position: absolute;
    left: 24px;
    content: "";
    background-image: url("../pic/load-pic.png");
    background-repeat: no-repeat;
    background-position: center center;
    width: 35px;
    height: 34px;
  }
}

.works__list {
  margin-top: 20px;
}

.works__item {
  margin-bottom: 20px;
  display: flex;
}

.work__text {
  margin-right: 30px;
  width: 100px;
}
</style>
