import { mount } from '@vue/test-utils';
import FiltersComponent from '@/components/FiltersComponent.vue';

describe('FiltersComponent', () => {
  it('updates select filter when an option is clicked', () => {
    const filters = [
      {
        type: 'select',
        title: 'Filter 1',
        value: 'Option 1',
        options: ['Option 1', 'Option 2', 'Option 3'],
      },
    ];

    const wrapper = mount(FiltersComponent, {
      props: {
        filters,
      },
    });

    // Call the setSelectionFilter method directly
    const filterIndex = 0;
    const option = 'Option 2';

    wrapper.vm.setSelectionFilter(filterIndex, option);

    // Assert that the "input" event is emitted with the updated filters
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0][0]).toEqual([
      {
        type: 'select',
        title: 'Filter 1',
        value: 'Option 2', // Updated value
        options: ['Option 1', 'Option 2', 'Option 3'],
      },
    ]);
  });

  it('updates range filter when a value is changed', () => {
    const filters = [
      {
        type: 'range',
        title: 'Filter 2',
        properties: [
          {
            key: 'Wood',
            isActive: true,
            value: [0, 100],
            color: 'brown-darken-1',
          },
        ],
      },
    ];

    const wrapper = mount(FiltersComponent, {
      props: {
        filters,
      },
    });

    // Call the setRangeFilter method directly
    const filterIndex = 0;
    const propertyIndex = 0;
    const newValue = [50, 100];

    wrapper.vm.setRangeFilter(filterIndex, propertyIndex, newValue);

    // Assert that the "input" event is emitted with the updated filters
    expect(wrapper.emitted('input')).toBeTruthy();
    expect(wrapper.emitted('input')[0][0]).toEqual([
      {
        type: 'range',
        title: 'Filter 2',
        properties: [
          {
            key: 'Wood',
            isActive: true,
            value: newValue, // Updated value
            color: 'brown-darken-1',
          },
        ],
      },
    ]);
  });
});
