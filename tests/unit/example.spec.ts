import { mount } from '@vue/test-utils';
import Page404 from '@/views/404Page.vue';
import Container from '@/components/container.vue';
import HomePage from '@/views/Home.vue';
import TodoItem from '@/components/todo-item.vue';
import DynamicComponents from '@/components/dynamic-component.vue';

describe('Render Pages', () => {
  it('renders 404 page', () => {
    const wrapper = mount(Page404);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders Container correctly', () => {
    const wrapper = mount(Container);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders correct layout', () => {
    const homePage = mount(HomePage);
    expect(homePage.html()).toContain('<h1>Welcome to Todo List</h1>');
  });

  it('render correct todo item', () => {
    const todo = mount(TodoItem, {
      props: {
        todo: { id: 2, title: 'test', done: false }
      }
    });
    expect(todo.element).toMatchSnapshot();
  });

  it('render dynamic components', () => {
    const dynamicComponents = mount(DynamicComponents);
    expect(dynamicComponents.html()).toMatchSnapshot();
  });
});
