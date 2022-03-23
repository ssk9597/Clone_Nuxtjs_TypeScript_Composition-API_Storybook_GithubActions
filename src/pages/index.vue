<template>
  <div>
    <p>
      {{ users }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api';
import axios from 'axios';

export default defineComponent({
  setup() {
    // data
    const users = ref({});

    useFetch(async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      users.value = res.data;
    });

    return {
      users,
    };
  },
});
</script>
