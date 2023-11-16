<template>
  <v-app>
    <App-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <Bottom/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    AppBar: () => import('./components/AppBar'),
    Bottom: () => import('./components/Bottom'),
  },

  data: () => ({
    //
  }),
};
</script>
