<template>
  <q-page>
    <q-layout
      view="hhh LpR lff"
      class="rounded-borders"
    >
      <q-header class="bg-primary">
        <q-toolbar>
          <q-btn
            flat
            dense
            icon="keyboard_backspace"
            @click="$router.go(-1)"
          />
          <q-toolbar-title class="absolute-center">Despacho de Camión</q-toolbar-title>

        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page padding>
          <q-form @submit="onSubmit">
            <div class="row items-center justify-center">
              <q-input
                v-model="form.nroguia"
                label="Numero de Guia"
                class="size"
              />
              <q-input
                v-model="form.patente"
                label="Patente"
                class="size"
              />
              <q-input
                v-model.number="form.pesaje"
                label="Pesaje (Kg)"
                class="size"
                type="Number"
              />
              <q-select
                v-model="form.chofer"
                :options="optionschofer"
                label="Chofer"
                class="size"
              />
              <q-input
                v-model="form.horasalida"
                mask="fulltime"
                :rules="['fulltime']"
                class="size"
                label="Hora de Salida"
              >
                <template v-slot:append>
                  <q-icon
                    name="access_time"
                    class="cursor-pointer"
                  >
                    <q-popup-proxy
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-time
                        v-model="form.horasalida"
                        now-btn
                        with-seconds
                        format24h
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input
                v-model.number="form.pesajesalidad"
                label="Total de pesaje de salida (Kg)"
                class="size"
                type="Number"
              />
              <q-input
                v-model="form.observacion"
                label="Observación"
                autogrow
                class="size q-mt-sm"
              />
            </div>
          </q-form>
          <q-page-sticky
            position="bottom-right"
            :offset="[18, 18]"
          >
            <q-btn
              fab
              :loading="loading"
              icon="done"
              color="primary"
              dense
              @click="onSubmit"
            />
          </q-page-sticky>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<style lang="stylus" scoped>
.right {
  float: right;
}

.size {
  width: 100%;
  max-width: 300px;
  min-width: 200px;
}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      optionsgenero: [
        'Masculino', 'Femenino'
      ],
      optionslicencia: [
        'Si', 'No'
      ],
      optionscertificado: [
        'Si', 'No'
      ],
      form: {
      },
      text: ''
    }
  },
  mounted () {
  },
  methods: {
    onSubmit: function () {
    }

  }
}
</script>
