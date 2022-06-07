<template>
<div  class="container">
    <h1>Agenda de Contatos</h1>
    <div>
        <p class="titulo2" v-if="$store.state.contatos.length <= 0">Sem contatos na agenda...</p>
        <div class="card-contato" v-for="(contato, index) in $store.state.contatos" v-bind:key="index"> 
    <div>
        <span class=""><strong>{{ contato.nome }} {{contato.sobrenome}}</strong></span>
        <p v-if="contato.email">Email: {{ contato.email  }}</p>
        <p>Número: {{ contato.numero }}</p>
    </div>
    <div>
        <button v-on:click.prevent="removerContato(index)">Excluir</button>
    </div>
        
        </div>
</div>
</div>

</template>

<script>

export default {
    components: {
 
    },
methods:{
    removerContato(index){
        this.$store.commit('delContato', index)
    }
},
watch: {

}
}

</script>

<style scoped>
.container {
    width:40rem;
    min-height: 10rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: #fff;
    border-radius: 1rem;
}
h1{
    font-size: 1.7rem;
}
.titulo2{
    font-size: 1.5rem;
    color: #808080;
}
.card-contato{
    width: 35rem;
    padding: 1rem;
    border-bottom: 1px solid #000;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
button{
  color: rgb(255, 255, 255);
  font-weight: bold;
  background-color: rgb(255, 1, 1);
  border: none;
  border-radius: 5px;
  padding: .5rem;
  cursor: pointer;
}
</style>
