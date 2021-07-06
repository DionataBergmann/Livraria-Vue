<template>
  <div>
    <form class="d-flex" style="padding-left: 30%; padding-right: 30%">
      <input
        class="form-control me-sm-2"
        type="text"
        placeholder="Titulo, gênero, episódios, temporada e ano"
        required
        autofocus
        v-model="palavra"
      />
      <button
        class="btn btn-primary"
        style="padding-bottom: 1%; padding-top: 1%"
        type="submit"
        @click.prevent="pesquisar()"
      >
        Pesquisa
      </button>
    </form>
    <div class="row m-4">
      <div class="col-md-3" v-for=" livro in  livros" :key=" livro.id">
        <div id='card-body' style="margin-bottom: 250px">
          <div class="card mb-4 shadow-lg" style="margin-left: 60px">
            <img
              class="card-img-top"
              :src=" livro.foto"
              alt="Card image cap"
              id='img'
            />
            <div
              class="card-body"
            >
                <h2 id="card" style="text-align: center">{{ livro.titulo }}</h2>
                <div style="text-align: center">
                <hr>
                <large class="text-muted">Autor: {{ livro.autores }}</large>
                <br>
                <large class="text-muted ">Ano: {{  livro.ano }}</large>
                <br>
                <large class="text-muted">Preço: {{  livro.preco}}</large>
                <br>
                <hr>
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
       livros: null,
      palavra: null,
    };
  },
  methods: {
    pesquisar() {
      axios.get(this.$urlAPI + "/livros/" + this.palavra)
            .then((response) => (this. livros = response.data),
      console.log(this. livros));
    }
  }
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
    margin-left: 680px;
}
#card{
  font-size: medium;
}
#itens{
  margin-left: 70px;
  margin-top: 5px;
}
</style>
