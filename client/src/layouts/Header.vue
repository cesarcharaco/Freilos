<template>
  <div>
    <q-layout view="hHh lpR lFf">

      <q-header
        reveal
        class="text-white"
      >
        <div class="headerIndex shadow-3">
          <q-toolbar>
            <div>
              <div>
                <div>
                  <img
                    src="../statics/logofreilos.png"
                    alt="logo"
                    style="width:150px"
                  >

                </div>
              </div>
              <div class="absolute-top-right q-pa-sm">
                <q-btn
                  flat
                  dense
                  icon="notifications"
                  auto-close
                  size="md"
                >
                  <q-badge
                    color="red"
                    floating
                    transparent
                    v-if="nNotify"
                  >{{nNotify}}</q-badge>
                  <q-menu
                    transition-show="jump-down"
                    transition-hide="jump-up"
                    fit
                    :offset="[0, 10]"
                    anchor="bottom right"
                    self="top right"
                    v-close-popup
                    auto-close
                  >
                    <q-item>
                      <q-item-section>
                        <q-item-label>Notificaciones</q-item-label>
                      </q-item-section>

                      <q-item-section
                        side
                        bottom
                      >
                        <q-item-label caption>
                          <a
                            class="cursor-pointer text-primary"
                            @click="disableAllNotify()"
                            primary
                          >Marcar como Leidas</a>
                        </q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-separator />
                    <q-list>
                      <q-scroll-area style="height: 200px; max-width: 300px;">
                        <q-item
                          v-for="n in myNotification"
                          :key="n.id"
                          clickable
                          v-close-popup
                          :class="[n.status?'white':colorActive]"
                        >
                          <q-item-section
                            push
                            @click="disableNotify(n.id)"
                          >
                            <q-item-label ovequasrline>{{n.title}}</q-item-label>
                            <q-item-label lines="
                    1">{{n.message}}</q-item-label>
                            <q-item-label caption>{{n.createdAt}}</q-item-label>
                          </q-item-section>
                        </q-item>
                      </q-scroll-area>
                    </q-list>
                  </q-menu>
                </q-btn>
                <q-btn
                  flat
                  dense
                  icon="exit_to_app"
                  auto-close
                  size="md"
                >
                  <q-menu
                    transition-show="jump-down"
                    transition-hide="jump-up"
                    fit
                    :offset="[0, 10]"
                    anchor="bottom right"
                    self="top right"
                    v-close-popup
                    auto-close
                  >
                    <q-item
                      clickable
                      v-ripple
                      style="width:200px"
                      class="text-primary"
                    >
                      <q-item-section avatar>
                        <q-icon
                          color="primary"
                          name="exit_to_app"
                        />
                      </q-item-section>

                      <q-item-section>Cerrar Sesión</q-item-section>
                    </q-item>
                  </q-menu>
                </q-btn>
              </div>
            </div>

          </q-toolbar>
        </div>
      </q-header>
      <q-page-container style="width:100%">
        <BarraNavegacion v-if="prueba"/>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
<style>
.my-menu-link {
  color: #ffffff;
  background: #0073ff;
}
.my-card {
  width: 100%;
  max-width: 45%;
}
</style>
<script>
import BarraNavegacion from '../Components/BarraNavegacion'
export default {
  components: { BarraNavegacion },
  data () {
    return {
      nNotify: 0,
      myNotification: {},
      prueba: false
    }
  },
  computed: {
  },
  methods: {
    exit () {
      this.$router.push('/')
    }
  },
  beforeDestroy () {
  }
}

</script>
