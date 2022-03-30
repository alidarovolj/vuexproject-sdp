<template>
    <div>
        {{ allTodos[3].name }}
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["allTodos"])
};
</script>