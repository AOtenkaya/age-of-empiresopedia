<template>
  <div class="filters">
    <div v-for="(filter, filterIndex) in filters" :key="filterIndex">
      <div class="filters__title">{{ filter.title }}</div>

      <div v-if="filter.type === 'select'" class="filters--select">
        <span
          v-for="(option, optionIndex) in filter.options"
          :key="optionIndex"
          :class="{ 'option__selected': filter.value === option }"
          class="option"
          @click="setSelectionFilter(filterIndex, option)"
        >
          {{ option }}
        </span>
      </div>

      <div v-else-if="filter.type === 'range'" class="filters--range">
        <div v-for="(property, propertyIndex) in filter.properties" :key="propertyIndex">
          <div class="filters--range-wrapper">
            <v-checkbox v-model="property.isActive" :label="property.key" class="filters__checkbox" hide-details :color="property.color" />

            <div>
              <v-range-slider
                :modelValue="property.value"
                @update:modelValue="setRangeFilter(filterIndex,propertyIndex,$event)"
                :disabled="!property.isActive"
                :max="200"
                :min="0"
                :step="5"
                :color="property.color"
                :thumb-label="property.isActive ? 'always' : true"
                hide-details
                class="range-slider align-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filters: Array,
  },
  methods: {
    setSelectionFilter(filterIndex, option) {
      const newFilters = [...this.filters]

      newFilters[filterIndex].value = option

      this.$emit('input', newFilters);
    },
    setRangeFilter(filterIndex,propertyIndex, option) {
      const newFilters = [...this.filters]

      newFilters[filterIndex].properties[propertyIndex].value = option

      this.$emit('input', newFilters);
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  &__title {
    margin: .5em;
    font-weight: bold;
    font-size: 1.5em;
  }

  &__checkbox {
    display: inline-flex;
    width: 8em;
  }

  &--select {
    display: flex;
    flex-wrap: wrap;
    margin: 1em;
  }

  &--range {
    display: block;
    align-items: center;
    justify-content: flex-start;
    margin: 1em;
  }

  &--range-wrapper {
    display: flex;
    align-items: center;
    margin: 1em 0;
  }
}
.option {
  padding: .5em 1em;
  border: 1px solid black;
  cursor: pointer;

  &__selected {
    background: gray;
    font-weight: bold;
  }
}

::v-deep .v-input {
  flex-grow: 0;
}

.range-slider {
  width: 20vw;
  display: inline-block;
  margin-right: 2em;

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    width: 30vw;
  }

  @media screen and (max-width: 768px) {
    width: 40vw;
  }
}
</style>
