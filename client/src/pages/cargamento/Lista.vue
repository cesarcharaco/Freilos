<template>
  <div>
    <Header />
    <div class="q-pa-sm q-mt-md">
      <q-list
        bordered
        class="shadow-3"
      >
        <div class="text-h6 q-pa-sm q-ml-sm">Pozo de Cargamentos</div>
        <q-item
          v-for="(act, index) in data"
          :key="index"
          clickable
          v-ripple
          @click="numdata = index"
        >
          <q-item-section
            avatar
            top
          >
            <q-img :src="act.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{act.nombre}}</q-item-label>
            <q-item-label>{{act.tipo}}</q-item-label>
            <q-item-label>{{act.desde}} --> {{act.hasta}} </q-item-label>
             <q-item-label>{{act.valor}}</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-item-label class="text-bold"> {{act.fecha}} </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="q-mt-xl">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
export default {
  components: { Header, Footer },
  data () {
    return {
      numdata: 0,
      data: [
        {
          nombre: 'Haidee',
          desde: 'Desde',
          hasta: 'Hasta',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          valor: '1.000.000$'
        },
        {
          nombre: 'Haidee',
          desde: 'Desde',
          hasta: 'Hasta',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          valor: '1.000.000$'
        },
        {
          nombre: 'Haidee',
          desde: 'Desde',
          hasta: 'Hasta',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          valor: '1.000.000$'
        }
      ]
    }
  }
}
</script>
