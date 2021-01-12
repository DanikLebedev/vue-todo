import { mount, shallowMount } from '@vue/test-utils';
import Page404 from '@/views/404Page.vue';
import TodoItem from '@/components/todo-item.vue';
import dynamicComponent from '@/components/dynamic-component.vue';
import CompositionApiComponent from '@/components/composition_api_component.vue';

describe('Render Pages', () => {
  it('renders 404 page', () => {
    const wrapper = mount(Page404);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('render correct todo item', () => {
    const todo = shallowMount(TodoItem, {
      props: {
        todo: { id: 2, title: 'test', done: false }
      }
    });
    expect(todo.element).toMatchSnapshot();
  });

  it('render dynamic components', () => {
    const dynamicComponents = shallowMount(dynamicComponent);
    expect(dynamicComponents.element).toMatchSnapshot();
  });

  it('render composition api component', () => {
    const dynamicComponents = mount(CompositionApiComponent);
    expect(dynamicComponents.html()).toMatchSnapshot();
  });
});
