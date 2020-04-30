<template>
  <div>
    <Header />
    <div class="q-pa-sm q-mt-md">
      <q-list
        bordered
        class="shadow-3"
      >
        <div class="text-h6 q-pa-sm q-ml-sm">Servicios de Carga</div>
        <q-item
          v-for="(act, index) in data"
          :key="index"
          clickable
          v-ripple
          @click="dialog = true, numdata = index"
        >
          <q-item-section
            avatar
            top
          >
            <q-img :src="act.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{act.nombre}}</q-item-label>
            <q-item-label>{{act.detalle}}</q-item-label>
            <q-item-label>{{act.desde}}</q-item-label>
            <q-item-label>{{act.tipo}}</q-item-label>
          </q-item-section>
          <q-item-section
            side
            top
          >
            <q-item-label class="text-bold"> {{act.fecha}} </q-item-label>
          </q-item-section>
        </q-item>
        <q-dialog v-model="dialog">
          <q-card class="window-width">
            <q-card-section class="row items-center q-pb-none">
              <div class="text-h6"> {{data[numdata].nombre}} </div>
              <q-space />
              <q-btn
                icon="close"
                flat
                round
                dense
                color="primary"
                v-close-popup
              />
            </q-card-section>

            <q-card-section>
              <q-item>
                <q-item-section
                  avatar
                  top
                >
                  <q-avatar size="70px">
                    <img :src="data[numdata].icon">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label> Sale de: <div class="text-weight-bolder"> {{data[numdata].desde}} </div>
                  </q-item-label>
                  <q-item-label> Hora: <div class="text-weight-bolder"> {{data[numdata].hora}} </div>
                  </q-item-label>
                  <q-item-label> Propuesta: <div class="text-weight-bolder"> {{data[numdata].propuesta}} </div>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card-section>
            <q-separator
              color="primary"
              inset
            />
            <q-card-actions align="around">
              <q-btn
                color="negative"
                style="width:45%"
                icon="close"
                v-close-popup
              >Declinar</q-btn>
              <q-btn
                color="positive"
                icon="done"
                v-close-popup
                style="width:45%"
              >Aceptar</q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
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
      dialog: false,
      numdata: 0,
      data: [
        {
          nombre: 'Haidee',
          detalle: 'detalle',
          desde: 'Desde donde sale la carga',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          propuesta: '1.000.000$',
          hora: '1:00PM'
        },
        {
          nombre: 'Haidee',
          detalle: 'detalle',
          desde: 'Desde donde sale la carga',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          propuesta: '1.000.000$',
          hora: '1:00PM'
        },
        {
          nombre: 'Haidee',
          detalle: 'detalle',
          desde: 'Desde donde sale la carga',
          tipo: 'Tipo de Carga',
          icon: '../statics/boy-avatar.png',
          fecha: '21/09/2020',
          propuesta: '1.000.000$',
          hora: '1:00PM'
        }
      ]
    }
  }
}
</script>
