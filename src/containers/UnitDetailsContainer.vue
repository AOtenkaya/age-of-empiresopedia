<template>
  <div class="unit-detail">
    <div class="unit-detail__row" v-for="(field, index) in fieldsToShow" :key="index">
      <div class="unit-detail__key">{{ field.text }}</div>

      <div class="unit-detail__value">
        {{ unitDetail[field.key] ?? '-' }}
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
      unitDetail: {},
      fieldsToShow: [
        {
          key: 'id',
          text: 'ID'
        },
        {
          key: 'name',
          text: 'Name'
        },
        {
          key: 'description',
          text: 'Description'
        },
        {
          key: 'age',
          text: 'Min.Required Age'
        },
        {
          key: 'wood',
          text: 'Wood Cost'
        },
        {
          key: 'food',
          text: 'Food Cost'
        },
        {
          key: 'gold',
          text: 'Gold Cost'
        },
        {
          key: 'build_time',
          text: 'Build Time'
        },
        {
          key: 'reload_time',
          text: 'Reload Time'
        },
        {
          key: 'hit_points',
          text: 'Hit Points'
        },
        {
          key: 'attack',
          text: 'Attack'
        },
        {
          key: 'accuracy',
          text: 'Accuracy'
        },
      ]
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

      if (selectedUnit) this.unitDetail = this.flattenObject({...selectedUnit})
    },

    flattenObject(obj) {
      const result = {};

      for (const key in obj) {
        const lowerCaseKey = key.toLowerCase(); // Convert the key to lowercase

        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          // Recursively flatten nested objects
          const nestedObj = this.flattenObject(obj[key]);
          for (const nestedKey in nestedObj) {
            result[nestedKey] = nestedObj[nestedKey];
          }
        } else {
          result[lowerCaseKey] = obj[key]; // Use the lowercase key in the result
        }
      }

      return result;
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

      @media screen and (min-width: 425px) and (max-width: 1024px) {
        width: 60vw;
      }

      @media screen and (max-width: 1024px) {
        width: 40vw;
      }
    }
  }
</style>
