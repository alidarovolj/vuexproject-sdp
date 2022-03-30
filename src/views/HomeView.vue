<template>
  <div class="home">
    <navbar v-bind:actName="name" />
    <div
      @click="$router.push({ name: 'single', params: { id: todo.id } })"
      v-for="todo of allTodos"
      :key="todo.id"
    >
      <p>{{ todo.id }}. {{ todo.name }}</p>
    </div>
    <p @click="setColor(true)">Change state</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import navbar from "../components/NavbarComp.vue";

export default {
  name: "HomeView",
  data() {
    return {
      name: "Olzhas",
    };
  },
  components: {
    navbar,
  },
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["FetchAction", "ChangeTextColor"]),
    setColor() {
      this.ChangeTextColor(true)
    },
  },
  async mounted() {
    this.FetchAction();
  },
};
</script>
