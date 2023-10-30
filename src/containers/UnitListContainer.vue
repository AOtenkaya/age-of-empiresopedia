<template>
  <div class="units">
    <FiltersComponent v-model:filters="filters" @update:filters="filters = $event" />

    <DataTableComponent
      :items="filteredUnitsList"
      :headers="headers"
      @row-click="goToUnitDetail"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

// Components
import FiltersComponent from '@/components/FiltersComponent.vue';
import DataTableComponent from '@/components/DataTableComponent.vue';

export default {
  name: "UnitListContainer",
  components: {
    FiltersComponent,
    DataTableComponent,
  },
  data() {
    return {
      itemsPerPage: 10,
      headers: [
        { title: 'Id', align: 'start', key: 'id' },
        { title: 'Name', align: 'start', key: 'name' },
        { title: 'Age', align: 'start', key: 'age' },
        { title: 'Costs', align: 'start', key: 'costs' },
      ],
      filters: [
        {
          type: 'select',
          key: 'age',
          title: 'Ages',
          value: 'All',
          options: ['All', 'Dark', 'Feudal', 'Castle', 'Imperial'],
        },
        {
          type: 'range',
          key: 'cost',
          title: 'Costs',
          properties: [
            {
              type: 'range',
              key: 'Wood',
              color: 'brown-darken-1',
              isActive: true,
              value: [0, 200],
            },
            {
              type: 'range',
              key: 'Food',
              color: 'red-darken-3',
              isActive: false,
              value: [0, 200],
            },
            {
              type: 'range',
              key: 'Gold',
              color: 'amber',
              isActive: false,
              value: [0, 200],
            },
          ]
        }
        
      ],
    };
  },
  computed: {
    ...mapState(['unitsList']),

    filteredUnitsList() {
      let filteredList = [...this.unitsList];

      this.filters.forEach(filter => {
        switch (filter.type) {
          case 'select':
            if (filter.value !== 'All') {
              filteredList = filteredList.filter(unit => unit[filter.key] === filter.value);
            }
            break;
          case 'range':
            filter.properties.forEach(property => {
              if (property.isActive) {
                filteredList = filteredList.filter(unit => {
                  if (unit.cost && unit.cost[property.key]) {
                    const value = unit.cost[property.key];
                    return value ? (value >= property.value[0] && value <= property.value[1]) : false;
                  }
                });
              }
            })
            
            break;
        }
      });

      return filteredList;
    }
  },
  methods: {
    goToUnitDetail({item: unit}) {
      this.$router.push(`/units/${unit.id}`)
    },
  },
};
</script>
