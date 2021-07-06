<template>
  <nav class="navbar navbar-expand-sm bg-secondary navbar-dark mb-3">
    <img src="logo_livros.png" alt="Livraria" class="mx-3">
    <router-link class="navbar-brand" to="/destaques">Livraria</router-link>

    <!-- Links -->
    <ul class="navbar-nav">

      <!-- Dropdown -->
      
      <router-link id="nav" class="navbar-brand" to="/cadlivros">Livros</router-link>  

       <router-link id="nav" class="navbar-brand" to="/pesquisa">Pesquisar</router-link>

        <router-link id="nav" class="navbar-brand" to="/estatisticas">Estatísticas</router-link>

        <router-link id="nav" class="navbar-brand" to="/comentarios">Comentarios</router-link>

        <router-link id="nav" class="navbar-brand" to="/graflivros">Grafico</router-link>

      
    </ul>

    <ul class="navbar-nav ml-auto">
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          <i class="fas fa-user mr-1"></i>
          <span v-if="user">{{user}}</span>
          <span v-else>(Não Logado)</span>
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/formlogin">Login</router-link>
          <a class="dropdown-item" href="#" @click="sair">Logout</a>
        </div>
      </li>
    </ul>
  </nav>  
</template>

<script>
export default {
  props: {
    user: String
  },
  methods: {
    sair() {
      localStorage.removeItem("token")
      this.$parent.mudaUser(null)
    }
  }
}
</script>

<style scoped>
img {
  width: 60px;
  height: 40px;
}
#nav{
  font-size: medium;
  margin-left: 30px;
}
</style>