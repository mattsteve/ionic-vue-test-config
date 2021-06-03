import { mount, VueWrapper } from '@vue/test-utils';
import { defineComponent } from 'vue';
import { IonicVue, IonInput } from '@ionic/vue';

const ExampleComponent = defineComponent({
    components: {
        IonInput
    },
    template: `<div><ion-input id="foo" /></div>`
});

const createWrapper = async (): Promise<VueWrapper<InstanceType<typeof ExampleComponent>>> => {
    const ionApp = document.querySelector('ion-app');
    const wrapper = mount(ExampleComponent, {
        attachTo: ionApp || undefined,
        global: {
            plugins: [IonicVue]
        }
    });
    await wrapper.vm.$nextTick();
    return wrapper;
};

describe('ExampleComponent.vue', () => {

    beforeEach(() => {
        const ionApp = document.createElement('ion-app');
        document.body.appendChild(ionApp);
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('test 1', async () => {
        await createWrapper();
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 200);
        });
    });

    it('test 2', async () => {
        await createWrapper();
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 200);
        });
    });

});
