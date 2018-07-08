import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const persents = (dashOffset / 100) * (100 - this.skill.percents);

      window.addEventListener("scroll", () => {
        const windowHeight = document.documentElement.clientHeight / 2;
        const skillsList = document.querySelector(".skills-list");
        const skill = this.$refs["opacity-skill"];
        const skillsListHeight = skillsList.getBoundingClientRect().top;

        if (skillsListHeight < windowHeight) {
          skill.classList.add("bounceInSkill");
          circle.style.strokeDashoffset = persents;
        }
      });
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
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
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: [],
    types: [
      { id: 0, name: "Frontend" },
      { id: 1, name: "Backend" },
      { id: 2, name: "Workflow" }
    ]
  },
  created() {
    axios.get("http://webdev-api.loftschool.com/skills/6").then(response => {
      this.skills = response.data;
    });
  },
  template: "#skills-list"
});
