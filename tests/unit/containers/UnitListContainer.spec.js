import { mount } from '@vue/test-utils';
import UnitListContainer from '@/containers/UnitListContainer.vue';
import { createStore } from 'vuex';

describe('UnitListContainer', () => {
  const store = createStore({
    state() {
      return {
        unitsList: [
          { id: 1, name: 'Unit 1', age: 'Dark', costs: { Wood: 100, Food: 50, Gold: 200 } },
          { id: 2, name: 'Unit 2', age: 'Feudal', costs: { Wood: 150, Food: 60, Gold: 180 } },
          { id: 3, name: 'Unit 3', age: 'Castle', costs: { Wood: 120, Food: 70, Gold: 190 } }
        ]
      }
    },
  });

  it('displays a FiltersComponent', () => {
    const wrapper = mount(UnitListContainer, {
      global: {
        plugins: [store],
      },
    });

    const filtersComponent = wrapper.findComponent({ name: 'FiltersComponent' });

    expect(filtersComponent.exists()).toBe(true);
  });
});
