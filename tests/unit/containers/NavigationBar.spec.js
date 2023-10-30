import { mount } from '@vue/test-utils';
import NavigationBar from '@/containers/NavigationBar.vue';

describe('NavigationBar.vue', () => {
  it('computes the correct title based on the route', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'unitList',
          },
        },
      },
    });

    const pageTitle = wrapper.vm.pageTitle;
    expect(pageTitle).toBe('Units Page');
  });

  it('computes the correct router links based on the route', () => {
    const wrapper = mount(NavigationBar, {
      global: {
        mocks: {
          $route: {
            name: 'unitDetail',
          },
        },
      },
    });

    const routerLinks = wrapper.vm.routerLinks;
    
    expect(routerLinks).toEqual([
      { address: '/', text: 'Home' },
      { address: '/units', text: 'Units' },
    ]);
  });
});
