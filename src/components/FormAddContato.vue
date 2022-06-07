<template>
      <div class="form">
        <h2>Criar Contato</h2>
        <p>Campos contendo * são obrigatórios</p>
        <span class="erro" v-if="errocampos">Preencha os campos corretamente!!</span>
        <p>
        <label for="nomecontato">Nome *</label>
        <input required v-model="nome" type="text" name="nomecontato" id="nomecontato">
        </p>
        <p>
        <label for="nomecontato">Sobrenome</label>
        <input required v-model="sobrenome" type="text" name="sobrenomecontato" id="sobrenomecontato">
        </p>
        <p>
        <label for="emailcontato">Email</label>
        <input type="email" v-model="email" name="emailcontato" id="emailcontato">
        </p>
        <p>
        <label for="numerocontato">Número *</label>
        <input required type="tel" v-model="numero" name="numerocontato" id="numerocontato">
        </p>
        <button v-on:click="addContato" type="submit" class="">Salvar Contato</button>
      </div>
</template>

<script>
export default {
    data() {
        return {

        nome: '',
        sobrenome: '',
        email: '',
        numero: '',
        errocampos: false,
        }
       
    },
    methods: {
    addContato(){
        if(this.nome === '' || this.numero === ''){
          this.errocampos = true
          return false
          
        }
        this.$store.commit('saveContato', {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
          numero: this.numero
        });
        alert('Contato Criado com Sucesso!!')
        this.errocampos = false
        this.nome = ''
        this.sobrenome = ''
        this.email = ''
        this.numero = ''
        
    }
    }
    
}
</script>

<style scoped>
.form{
  width: 30rem;
  height: 40rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #fff;

  border-radius: 10px;
}

h2{
  font-size: 2rem;
  margin-bottom: 2rem;
}
input{
  border: 1px solid #808080;
  border-radius: 3px;
  padding: .5rem;
}
label{
  font-size: 1.2rem;
  color: #808080;
}
p{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
}
button{
  color: rgb(83, 83, 83);
  font-weight: bold;
  background-color: rgb(1, 255, 170);
  border: none;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;
}

button:hover {
  background-color:#7fffd4;
}
.erro{
  color: #ff0000;
}
</style>



