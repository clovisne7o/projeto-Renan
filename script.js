new Vue({
  el: '#root',
  data: {
    contatos: [],
    nome: null,
    telefone: null
  },
  methods:{
    adicionarContato: function (e) {
      e.preventDefault()
    this.contatos.push({
      nome: this.nome, 
      telefone: this.telefone
    })
    }
  }
})