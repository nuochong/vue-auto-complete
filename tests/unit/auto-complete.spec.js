import { shallowMount } from '@vue/test-utils';
import AutoComplete from '../../packages/auto-complete/AutoComplete.vue';

describe('AutoComplete.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AutoComplete, {
      propsData: {
        source: 'https://musicapi.leanapp.cn/search?keywords='
      }
    });
  });

  it('检测输入框', () => {
    expect(wrapper.find('input')).toBeTruthy();
    expect(wrapper.findAll('input')).toHaveLength(1);
  });

  it('当输入框获取焦点时设置isFocussed属性true', () => {
    wrapper.find('input').trigger('focus');
    expect(wrapper.vm.isFocussed).toEqual(true);
  });

  it('当设置了resultsDisplay、resultsProperty、输入框获取焦点并请求到数据显示自定义的三条', () => {
    wrapper.setProps({
      resultsDisplay: 'name',
      resultsProperty: 'result.songs'
    });
    wrapper.setData({
      value: '海阔天空',
      results: [
        {
          id: 400162138,
          name: '海阔天空1'
        },
        {
          id: 400162139,
          name: '海阔天空2'
        },
        {
          id: 400162140,
          name: '海阔天空3'
        }
      ],
      isFocussed: true,
      isShowContent: true
    });
    expect(wrapper.vm.value).toEqual('海阔天空');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.findAll('li')).toHaveLength(3);
    });
  });

  it('检测palcehoder', () => {
    wrapper.setProps({
      placeholder: '我是测试数据'
    });
    wrapper.vm.$nextTick(() => {
      const query = wrapper.find('input').element.getAttribute('placeholder');
      expect(query).toEqual('我是测试数据');
    });
  });
});
