import { mount } from '@vue/test-utils';
import NavigationBar from '@/containers/NavigationBar.vue';

describe('NavigationBar', () => {
  it('correctly calculates the page title', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'unitList',
          },
        },
      },
    });

    expect(wrapper.vm.pageTitle).toBe('Units Page');
  });

  it('correctly calculates the router links for unitList page', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'unitList',
          },
        },
      },
    });

    expect(wrapper.vm.routerLinks).toEqual([
      { address: '/', text: 'Home' },
    ]);
  });

  it('correctly calculates the router links for unitDetail page', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'unitDetail',
          },
        },
      },
    });

    expect(wrapper.vm.routerLinks).toEqual([
      { address: '/', text: 'Home' },
      { address: '/units', text: 'Units' },
    ]);
  });

  it('correctly calculates the router links for home page', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'home',
          },
        },
      },
    });

    expect(wrapper.vm.routerLinks).toEqual([
      { address: '/units', text: 'Units' },
    ]);
  });
});
