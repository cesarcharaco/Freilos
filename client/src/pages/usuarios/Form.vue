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
          <q-toolbar-title class="absolute-center">Registro de Usuario</q-toolbar-title>

        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page padding>
          <q-form @submit="onSubmit">
            <div class="row items-center justify-center">
              <q-input
                v-model="form.nombre"
                label="Nombre"
                class="size"
              />
              <q-input
                v-model="form.email"
                label="Email"
                type="email"
                class="size"
              />
              <q-input
                v-model="form.password"
                label="Password"
                :type="isPwd ? 'password' : 'text'"
                class="size"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-select
                v-model="form.tipousuario"
                :options="optionstipousuario"
                label="Tipo de Usuario"
                class="size"
              />
              <q-select
                v-model="form.status"
                :options="optionsstatus"
                label="Status"
                class="size"
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
      optionstipousuario: [
        'Administrador', 'Conductor', 'Camión'
      ],
      optionsstatus: [
        'Activo', 'Inactivo'
      ],
      form: {
      },
      text: '',
      isPwd: false,
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
