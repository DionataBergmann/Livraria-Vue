<template>
  <div class="container-fluid">
        <h1 id='title'>Titulos em Destaque</h1>
    <div class="row m-4">
      <div class="col-md-3" v-for="livro in livros" :key="livro.id">
        <div id='card-body'>
          <div class="card mb-4 shadow-lg" style="margin-left: 60px">
            <img
              class="card-img-top"
              :src="livro.foto"
              alt="Card image cap"
              id='img'
            />
            <div
              class="card-body"
            >
                <h2 id="card" style="text-align: center">{{ livro.titulo }}</h2>
                <div style="text-align: center">
                
                <large class="text-muted">Autor: {{ livro.autor }}</large>
                <br>
                <large class="text-muted ">Ano: {{ livro.ano }}</large>
                <br>
                <large class="text-muted">Preço: {{livro.preco}}</large>
                <br>
           
           
              <router-link id="nav" class="btn btn-warning btn-sm mx-1" to="/comentar">Comentar</router-link>

         
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      livro: {
        id: null,
        titulo: null,
        autor_id: null,
        preco: null,
        ano: null,
        foto: null,
        destaque: null,
      },
      filtro: "",
      livros: [],
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/livros/destaques")
        .then((response) => (this.livros = response.data.dados));
      this.filtro = "";  
    },

    editar(id) {
      axios
        .get(this.$urlAPI + "/livros/" + id)
        .then((response) => {
          this.livro = response.data
          this.$router.push({ path: "/formlivros", query: { altera: this.livro}})
        });
    },

    destacar(id) {
      axios.put(this.$urlAPI + "/livros/destaque/" + id).then((response) => {
        if (response.status == 200) {
          this.listar();
        }
      });
    },

    excluir(id, titulo) {
      if (confirm(`Confirma exclusão do livro '${titulo}'?`)) {
        axios.delete(this.$urlAPI + "/livros/" + id).then((response) => {
          if (response.status == 200) {
            alert(`Ok! Livro '${titulo}' excluído com sucesso!`);
            this.listar();
          }
        });
      }
    },

    pesquisar() {
      if (this.filtro.length == 0) {
        this.listar();     // mostra todos
      } else {
        axios
          .get(this.$urlAPI + "/livros/pesq/" + this.filtro)
          .then((response) => (this.livros = response.data));
      }
    },
  },
  filters: {
    estiloMoeda(value) {
      return Number(value).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
    },
    destacaLivro(value) {
      return value ? "x" : "";
    },
  },
};
</script>

<style scoped>
#img{
    align-self: center;
    margin-top: 5px;
    height: 250px;
    width: 200px;
    max-height: 250px;
    min-height: 250px;
    max-width: 200px;
    min-width: 200px;
 
}
#card-body{
    margin-top: 5px;
    height: 500px;
    width: 362px;
    max-height: 500px;
    min-height: 500px;
    max-width: 362px;
    min-width: 362px;
}
#title{
    text-align: center;
}
#card{
  font-size: medium;
}

</style>

