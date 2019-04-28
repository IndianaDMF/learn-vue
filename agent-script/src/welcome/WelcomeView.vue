<template>
  <div>
    <h1>{{ msg }}</h1>
    <form>
      <div class="form-row">
        <div class="col">
            <label for="firstName">First Name</label>
            <input id="firstName" type="text" class="form-control"
              placeholder="First name" v-model="prospect.FirstName">
        </div>
        <div class="col">
            <label for="lastName">Last Name</label>
            <input id="lastName" type="text" class="form-control"
              placeholder="Last name" v-model="prospect.LastName">
        </div>
      </div>
      <label>{{ prospect }}</label>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Welcome',
  computed: mapState({
    prospect: state => state.prospect,
  }),
  methods: mapActions('prospect', [
    'getProspect',
  ]),
  props: {
    msg: String,
  },
  created() {
    this.$store.dispatch('getProspect');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
