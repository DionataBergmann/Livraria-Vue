<template>
  <div class="container-fluid">
        <h1  id='title'>Comentarios
        
      </h1>
    <div class="row m-4">
      <div class="col-md-3" v-for="comment in avaliacao" :key="comment.id">
        <div id='card-body'>
          <div class="card mb-4 shadow-lg" style="margin-left: 60px">
            
            <div
              class="card-body"
            >
                <h2 id="card" style="text-align: center">{{ comment.livros }}</h2>
                <div style="text-align: center">
                
                <large class="text-muted">Comentário: {{ comment.comentario }}</large>
                <h2 id="card" style="text-align: center">{{ comment.preco }}</h2>
                
                
                <div id="itens">
                <td >
          </td>
              </div>
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
      comment: {
        id: null,
        livros: null,
        comentario: null,
       
      
      },
      filtro: "",
      avaliacao: [],
     
      
    };
  },
  mounted() {
    this.listar();
   
  },
  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/avaliacao")
        .then((response) => (this.avaliacao = response.data));
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
</style>
