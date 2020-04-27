<template>
  <q-layout>
    <q-page-container class="bg-grey-4">
      <q-page class="row justify-center">
        <div class="col column items-center justify-center">
          <img
            src="../statics/logofreilos.png"
            alt="Logo GuioMercado"
            style="width: 250px;"
          >
          <q-form @submit="onSubmit">
            <q-card style="width:100%">
              <q-card-section style="width:100%">
                <q-input
                  class="q-ma-sm"
                  type="email"
                  v-model="form.email"
                  label="Correo electrónico"
                  placeholder="correo@example.com"
                  autofocus
                >
                  <template v-slot:prepend>
                    <q-icon name="mail"></q-icon>
                  </template>
                </q-input>

                <q-input
                  class="q-ma-sm"
                  :type="isPwd ? 'password' : 'text'"
                  v-model="form.password"
                  label="Contraseña"
                >
                  <template v-slot:prepend>
                    <q-icon name="vpn_key"></q-icon>
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                <div class="text-center q-ma-sm">
                  <q-btn
                    glossy
                    color="primary"
                    class="full-width q-mr-sm"
                    :loading="loading"
                    @click="onSubmit()"
                  >Ingresar
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-center" />
                      Loading...
                    </template>
                  </q-btn>
                </div>
                <div class="text-center q-ma-sm">
                  <q-btn
                    label="Regístrate aqui"
                    flat
                    dense
                    text-color="red"
                    no-caps
                    align="center"
                    to='/register'
                  />
                </div>
                <p
                  align="center"
                  class="text-red"
                >¿Olvidaste la contraseña?</p>
              </q-card-section>
            </q-card>
          </q-form>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      form: {},
      isPwd: true,
      loading: false
    }
  },
  methods: {
    ...mapMutations('generals', ['login']),
    ...mapActions('generals', ['saveUser']),
    onSubmit () {
      // this.loading = true
      /* this.$q.loading.show({
        message: 'Iniciando sesión'
      }) */
      /* this.$api.post('login', this.form).then(res => {
        if (res) {
          this.login(res)
        } else {
          console.log('error de ususario')
          // this.loading = false
        } */
      this.$router.push('menu')
      // this.$q.loading.hide()
      // })
    }
  }
}
</script>
