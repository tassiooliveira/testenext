import { createStore } from 'vuex'

export default createStore({
  state: {

    contatos: []

  },
  getters: {
  },
  mutations: {
    getLocalStorage(state, payload){
      console.log(payload)
      state.contatos = payload
    },
    saveContato(state, payload){
      
      state.contatos.push(payload)
      state.contatos.sort(function(a,b){
        if (a.nome<b.nome){
          return -1
        }else{
          return true
        } 
      })
      localStorage.setItem('contatos', JSON.stringify(state.contatos))
    },
    delContato(state, payload){
      state.contatos.splice(payload, 1)
      localStorage.setItem('contatos', JSON.stringify(state.contatos))
      if(state.contatos.length === 0){
        localStorage.removeItem('contatos')
      }
    },
    
  },
  actions: {
  },
  modules: {
  }
})
