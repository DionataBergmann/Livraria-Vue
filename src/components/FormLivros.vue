<template>
  <div class="container">
    <h2>
      <span v-if="livro.id">Alteração de Livros</span>
      <span v-else>Inclusão de Livros</span>

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
      <div class="row">
        <div class="col-sm-12">
          <div class="form-group">
            <label for="titulo">Titulo do Livro:</label>
            <input
              type="text"
              id="titulo"
              class="form-control"
              v-model="livro.titulo"
              ref="titulo"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="autor_id">Autor:</label>
            <select
              id="autor_id"
              class="form-control"
              v-model="livro.autor_id"
              required
            >
              <option v-for="autor in autores" :key="autor.id" :value="autor.id">
                {{ autor.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="preco">Preço R$</label>
            <input
              type="text"
              id="preco"
              class="form-control"
              v-model="livro.preco"
              required
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="form-group">
            <label for="ano">Ano:</label>
            <input
              type="text"
              id="ano"
              class="form-control"
              v-model="livro.ano"
              required
            />
          </div>
        </div>
        <div class="col-sm-9">
          <div class="form-group">
            <label for="foto">URL da Foto:</label>
            <input
              type="text"
              id="foto"
              class="form-control"
              v-model="livro.foto"
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
      livro: {
        id: null,
        titulo: null,
        autor_id: null,
        preco: null,
        ano: null,
        foto: null,
      },
      autores: null,
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
        .post(this.$urlAPI + "/livros", this.livro)
        .then((response) =>
          alert(`Ok! Livro Cadastro com código ${response.data.id}`)
        );
      this.livro = {}; 
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
</style>
