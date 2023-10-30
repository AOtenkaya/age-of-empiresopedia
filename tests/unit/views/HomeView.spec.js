import { shallowMount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("renders the component", () => {
    const wrapper = shallowMount(HomeView);
    expect(wrapper.exists()).toBe(true);
  });
});