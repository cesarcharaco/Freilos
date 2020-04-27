<template>
  <q-list
    bordered
    class="rounded-borders"
    style="color: #005eb8"
  >
    <template v-for="(item) in menu">
      <q-expansion-item
        v-if="item.children"
        expand-separator
        :icon="item.icon"
        :label="item.label"
        :content-inset-level="0.25"
        :key="item.label"
        :default-opened="item.defaultOpened"
        :to="item.to"
      >
        <tree-menu
          v-if="item.children"
          :menu="item.children"
          :children="item"
          :key="item.label"
        />
      </q-expansion-item>
      <q-item
        v-if="!item.children"
        clickable
        v-ripple
        :to="item.to"
        :key="item.label"
        @click="active_link_menu = item.to"
        :active="active_link_menu === item.to"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>
          {{item.label}}
        </q-item-section>
      </q-item>
    </template>
  </q-list>
</template>

<script>
import TreeMenu from './TreeMenu'
export default {
  name: 'ItemsMenu',
  components: { TreeMenu },
  data () {
    return {
      active_link_menu: '',
      menu: [
        {
          label: 'Inicio',
          icon: 'home',
          to: '/menu'
        }
      ]
    }
  },
  computed: {
  }
}
</script>

<style>
.my-menu-link {
  color: #ffffff;
  background: #ff7e7e;
}
</style>
