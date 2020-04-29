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
          <q-toolbar-title class="absolute-center">Registro de Camión</q-toolbar-title>

        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page padding>
          <q-form @submit="onSubmit">
            <div class="row items-center justify-center">
              <q-input
                v-model="form.modelo"
                label="Modelo"
                class="size"
              />
              <q-input
                v-model="form.marca"
                label="Marca"
                class="size"
              />
              <q-input
                v-model="form.vin"
                label="Vin"
                class="size"
              />
              <q-input
                v-model.number="form.ano"
                label="Año"
                class="size"
                type="Number"
              />
              <q-input
                v-model.number="form.capacidad"
                label="Capacidad (Kg)"
                class="size"
                type="Number"
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
      text: '',
      loading: false
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
