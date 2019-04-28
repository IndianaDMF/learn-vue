<template>
  <div class="home">
    <Welcome msg="This is the welcome page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/welcome/WelcomeView.vue';

export default {
  name: 'home',
  components: {
    Welcome,
  },
};
</script>
