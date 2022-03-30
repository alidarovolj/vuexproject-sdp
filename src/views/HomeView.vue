<template>
  <div class="home">
    <navbar />
    <div @click="$router.push({ name: 'single', params: {id: todo.id} })" v-for="todo of allTodos" :key="todo.id">
      <p>{{ todo.id }}. {{ todo.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import navbar from '../components/NavbarComp.vue'

export default {
  name: 'HomeView',
  components: {
    navbar
  },
  computed: mapGetters(['allTodos']),
  methods: mapActions(['FetchAction']),
  async mounted() {
    this.FetchAction();
  }
}
</script>
