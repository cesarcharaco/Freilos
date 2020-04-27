<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="column">
        <div>
          <q-toolbar>
            <q-toolbar-title>
              Freilos App
            </q-toolbar-title>
            <div class="absolute-right q-pa-sm">
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
                icon="settings"
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
          </q-toolbar>
        </div>

        <div class="row">
          <div class="col1">
            <q-avatar
              class="q-ma-md"
              size="80px"
            >
              <img src="../statics/boy-avatar.png">
            </q-avatar>
          </div>
          <div class="col1 q-mt-sm">
            <div class="text-h6 text-bold"> Haidee Martines</div>
            <div class="text-h6"> 10.000,00$</div>
            <div class="text-subtitle2"> 100.000,00$</div>
          </div>
        </div>
      </div>
      <BarraNavegacion />
    </q-header>
    <q-page-container>
      <UltimasActividades />
      <div class="row justify-center">
        <div class="q-pa-md">
          <q-btn
            round
            color="primary"
            icon="shopping_cart"
            size="20px"
          />
        </div>
        <div class="q-pa-md">
          <q-btn
            round
            color="primary"
            icon="shopping_cart"
            size="20px"
          />
        </div>
      </div>
      <Footer />
    </q-page-container>
  </q-layout>
</template>

<script>
import BarraNavegacion from '../Components/BarraNavegacion'
import UltimasActividades from '../Components/UltimasActividades'
import Footer from '../Components/Footer'
export default {
  name: 'MainLayout',
  components: { BarraNavegacion, UltimasActividades, Footer },
  data () {
    return {
      leftDrawerOpen: false,
      nNotify: 3,
      myNotification: {}
    }
  }
}
</script>
