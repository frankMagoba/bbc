import { shallowMount } from "@vue/test-utils";
import btnComponent from "../../index.vue";
describe("BUTTON COMPONENT", () => {
  const wrapper = shallowMount(btnComponent, {
    propsData: {
      customName: "btn",
    },
  });

  test("button should exist", async () => {
    const button = wrapper.find("button[name='btn']");
    expect(button);
  });

  test("clicking should trigger an event", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().changeLang[0][0].Name).toEqual("btn");
  });
});
