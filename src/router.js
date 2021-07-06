import Vue from 'vue'
import VueRouter from 'vue-router'

import BoasVindas from './components/BoasVindas'
import CadastroLivros from './components/CadastroLivros'
import FormLivros from './components/FormLivros'
import FormLogin from './components/FormLogin'
import GraficoLivros from './components/GraficoLivros'
import Destaques from './components/destaques'
import Pesquisa from './components/pesquisa'
import Comentarios from './components/comentarios'
import Estatisticas from './components/estatisticas'
import Comentar from './components/comentar'


Vue.use(VueRouter)

const routes = [
  // { path: '/', component: BoasVindas },
  { path: '/destaques', component: Destaques },
  { path: '/cadlivros', component: CadastroLivros },
  { path: '/formlivros', component: FormLivros },
  { path: '/formlogin', component: FormLogin },
  { path: '/graflivros', component: GraficoLivros },
  { path: '/comentarios', component: Comentarios },
  { path: '/estatisticas', component: Estatisticas },
  { path: '/comentar', component: Comentar },
  { path: '/pesquisa', component: Pesquisa },
  
]

export default new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})
