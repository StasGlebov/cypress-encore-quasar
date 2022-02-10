import { mount } from '@cypress/vue';
import mock from './mock';
import Component from '../../../src/components/Component'

import { extensions } from '../base/extend';
import { Quasar } from 'quasar'

describe("Example", () => {
    beforeEach(() => {
        Quasar.__qInstalled = undefined;
    })

    it("Example test", () => {
        mount(Component, {
            propsData: mock.test,
            extensions
        })
    })
})
