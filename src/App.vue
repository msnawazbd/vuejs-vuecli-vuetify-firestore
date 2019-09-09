<template>
  <v-app>
    <Navbar/>
    <v-content class="pt-10 mt-6 mx-4">
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Navbar, Footer
  },
  data: () => ({
    //
  }),
};
</script>
