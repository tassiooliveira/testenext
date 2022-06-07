<template>
  <div class="home">
    <ContatosComp/>
  </div>
</template>

<script>
import ContatosComp from '../components/ContatosComp.vue'

export default {
  name: 'HomeView',
  components: {
    ContatosComp
  },
  mounted() {
      if (localStorage.getItem('contatos')) {
        console.log(JSON.parse(localStorage.getItem('contatos')))
        this.$store.commit('getLocalStorage', JSON.parse(localStorage.getItem('contatos')))
        ;
    }
    }
}
</script>
