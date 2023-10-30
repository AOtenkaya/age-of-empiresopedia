import { mount } from '@vue/test-utils';
import DataTableComponent from '@/components/DataTableComponent.vue';

describe('DataTableComponent', () => {
  it('emits "row-click" event when a row is clicked', async () => {
    const items = [
      { id: 1, name: 'Item 1', age: 25, costs: { Wood: 100, Food: 50, Gold: 200 } },
      { id: 2, name: 'Item 2', age: 30, costs: { Wood: 150, Food: 60, Gold: 180 } },
    ];

    const headers = [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Age', value: 'age' },
    ];

    const wrapper = mount(DataTableComponent, {
      props: {
        items,
        headers,
      },
    });

    await wrapper.vm.handleRowClick({ item: items[0] });

    expect(wrapper.emitted('row-click')).toBeTruthy();
  });
});
