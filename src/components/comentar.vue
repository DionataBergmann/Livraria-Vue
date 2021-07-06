<template>
  <div class="container">
    <h2>
      <span v-if="comment.id">Adicionar Comentario</span>
      <span v-else>Adicionar comentario</span>

      <a class="btn btn-warning float-right" href="#" @click="goBack">
        <i class="fas fa-undo"></i> Voltar</a
      >
    </h2>

    <h4 v-if="erros.length" class="text-danger">
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li
          v-for="(erro, index) in erros"
          class="text-danger small"
          :key="index"
        >
          {{ erro }}
        </li>
      </ul>
    </h4>

    <form @submit.prevent="salvar">
      <div id="bloco" class="row">
        <div  class="col-sm-12">
          <div class="form-group">
            <label for="titulo">Comentar:</label>
            <input
              type="text"
              id="titulo"
              class="form-control"
              v-model="comment.comentario"
              ref="titulo"
              required
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-success px-4 mr-2">
        <i class="far fa-save"></i> Salvar
      </button>
      <button type="reset" class="btn btn-danger px-4">
        <i class="far fa-window-restore"></i> Limpar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comment: {
        id: null,
        livros: null,
        comentario: null,
      },
    
      erros: [],
    };
  },

  methods: {
    verificaForm() {
      // limpa vetor de erros
      this.erros = [];
     

      
      return false;
    },

    altera() {
      axios
        .put(this.$urlAPI + "/livros/edit/" + this.livro.id, this.livro)
        .then((response) =>
          alert(`Ok! Livro Alterado Corretamente ${response.data}`)
        );
    },

    inclui() {
      axios
        .post(this.$urlAPI + "/avaliacao", this.comment)
        .then((response) =>
          alert(`Ok! Livro Cadastro com código ${response.data.id}`)
        );
      this.comment = {}; 
      // this.$refs.titulo.focus();
    },

    salvar() {
      // if (!localStorage.getItem("token")) {
      //   alert("Erro... Faça Login para Realizar a Inclusão / Alteração")
      //   return
      // }

      if (!this.verificaForm()) {
        return;
      }

      if (this.livro.id) {
        this.altera();
      } else {
        this.inclui();
      }
    },
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
  mounted() {
    axios.get(this.$urlAPI + "/autores").then((response) => {
      this.autores = response.data;
    });

    if (this.$route.query.altera) {
      //      console.log(this.$route.query.altera)
      this.livro = this.$route.query.altera;
    }
  },
};
</script>

<style>
#titulo{
    width: 1100px;
    height: 200px;
}
</style>
