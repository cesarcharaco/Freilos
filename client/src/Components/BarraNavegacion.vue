<template>
  <div>
    <q-scroll-area
      horizontal
      style="height: 70px; width: 100%;"
      class="bg-grey-1"
    >
      <div class="row no-wrap">
        <q-btn
          v-for="(boton, index) in botones"
          :key="index"
          rounded
          push
          class="q-mr-xs q-mb-xs q-mt-xs"
          color="primary"
          :label="boton.label"
          :to="boton.to"
          style="width:100px; height:60px"
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  data () {
    return {
      botones: [
        {
          label: 'Perfil',
          to: '/menu'
        },
        {
          label: 'Estado',
          to: '/menu'
        },
        {
          label: 'Pozo de Ventas',
          to: '/menu'
        },
        {
          label: 'Pozo de Compras',
          to: '/menu'
        }
      ]
    }
  }
}
</script>
