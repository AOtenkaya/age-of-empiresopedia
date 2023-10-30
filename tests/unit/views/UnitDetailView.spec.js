import { shallowMount } from '@vue/test-utils';
import UnitDetailView from '@/views/UnitDetailView.vue';
import UnitDetailsContainer from '@/containers/UnitDetailsContainer.vue';

describe('UnitDetailView', () => {
  it('renders UnitDetailsContainer component', () => {
    const wrapper = shallowMount(UnitDetailView);
    expect(wrapper.findComponent(UnitDetailsContainer).exists()).toBe(true);
  });
});