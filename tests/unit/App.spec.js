import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import NavigationBar from '@/containers/NavigationBar.vue';

describe('App.vue', () => {
  it('renders NavigationBar component', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.findComponent(NavigationBar).exists()).toBe(true);
  });
});