<template>
  <div class="unit-detail">
    <div class="unit-detail__row" v-for="(value, key) in unitDetail" :key="key">
      <div class="unit-detail__key">{{ key }}</div>

      <div v-if="key === 'cost'" class="unit-detail__value">
        {{ $filters.formatCost(value) }}
      </div>

      <div v-else class="unit-detail__value">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "UnitDetailsContainer",

  data() {
    return {
      unitDetail: {}
    }
  },

  created() {
    this.setUnitDetail()
  },

  computed: {
    ...mapState(['unitsList']),
  },

  methods: {
    setUnitDetail() {
      const { params } = this.$route;

      const selectedUnit = this.unitsList.find(unit => unit.id === parseInt(params.id))

      if (selectedUnit) this.unitDetail = {...selectedUnit}
    }
  }
}
</script>

<style lang="scss" scoped>
  .unit-detail {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 30px;

    &__row {
      display: flex;
      border-radius: 4px;
      border: 1px solid black;
      width: fit-content;
      min-height: 3em;
    }

    &__key {
      display: flex;
      align-items: center;
      justify-content: start;
      font-weight: bold;
      background-color: grey;
      padding-inline: .5em;
      width: 10vw;

      @media screen and (min-width: 768px) and (max-width: 1440px) {
      width: 15vw;
      }

      @media screen and (min-width: 1024px) and (max-width: 1440px) {
      width: 15vw;
      }

      @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 20vw;
      }

      @media screen and (min-width: 375px) and (max-width: 768px) {
        width: 30vw;
      }

      @media screen and (max-width: 375px) {
        width: 40vw;
      }
    }

    &__value {
      display: flex;
      align-items: center;
      justify-content: start;
      font-weight: bold;
      padding-inline: .5em;
      width: 40vw;

      @media screen and (min-width: 1024px) and (max-width: 1440px) {
        width: 50vw;
      }

      @media screen and (max-width: 1024px) {
        width: 60vw;
      }
    }
  }
</style>
