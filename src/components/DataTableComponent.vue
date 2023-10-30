<template>
  <div class="units__list">
    <v-data-table
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items="items"
      item-value="id"
      class="datatable elevation-1"
      sticky
      @click:row="handleRowClick"
    >
      <template v-slot:[`item.costs`]="{ item }">
        {{ $filters.formatCost(item.cost) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsPerPage: 10
    }
  },
  props: {
    items: Array,
    headers: Array,
  },
  methods: {
    handleRowClick(event,row) {
      this.$emit('row-click', row);
    },
  },
};
</script>

<style lang="scss" scoped>
.datatable {
  width: 100%;
  max-height: 60vh;
}

::v-deep .v-data-table__th {
  background-color: grey;
}
</style>
