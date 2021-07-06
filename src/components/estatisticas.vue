<template>
  <div class="container mt-4">
    <h2>
      Dados Estatísticos
      
      
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th id="ordem">Média</th>
          <th id="ordem">Total de Livros</th>
          <th id="ordem">Preco Total dos Livros</th>
          <th id="ordem">Preço do Livro mais caro</th>
          <th id="ordem">Preço do Livro mais barato</th>
          
        </tr>
        
          <td id="ordem" >R{{ dados.msg }}</td>
          <td id="ordem">{{ dados.total_livros }}</td>
          <td id="ordem">R$ {{ dados.preco_total }}</td>
          <td id="ordem">R$ {{ dados.maior }}</td>
          <td id="ordem">R$ {{ dados.menor }}</td>
         
       
      </thead>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dado: {
        msg: null,
        preco_total: null,
        total_livros: null,
        maior:null,
        menor: null
      },
      filtro: "",
      dados: []
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/dados")
        .then((response) => (this.dados = response.data));
      this.filtro = "";  
    },

    
  filters: {
    estiloMoeda(value) {
      return Number(value).toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      });
    }
  }
}
}
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
#ordem{
  text-align: center;
}
</style>
