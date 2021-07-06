<template>
 <div class="container">
   <h2>Gráfico Relacionando Nº de Livros por Autor</h2>
     <GChart
       type="PieChart"
       :data="livrosAutores"
    />
 </div>   
</template>

<script>
import { GChart } from 'vue-google-charts'
import axios from 'axios'
 
export default {
  components: {
    GChart
  },

  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      livrosAutores: [["Autor", "Nº Livros"]],
    }
  }, 
  mounted() {
    axios.get(this.$urlAPI + "/autores_livros")
         .then(response => {
           const autores = response.data;
//           console.log(autores)
           autores.forEach(autor => {
             this.livrosAutores.push([autor.nome, autor.num])             
           });
         })
  }
}
</script>

<style scoped>

</style>
