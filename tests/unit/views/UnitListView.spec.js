// Import the necessary libraries
import { shallowMount } from '@vue/test-utils';
import UnitListView from '@/views/UnitListView.vue';

describe('UnitListView', () => {
  it('renders the UnitListContainer component', () => {
    const wrapper = shallowMount(UnitListView);

    const unitListContainer = wrapper.findComponent({ name: 'UnitListContainer' });

    expect(unitListContainer.exists()).toBe(true);
  });
});
