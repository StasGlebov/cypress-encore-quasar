import { mount } from '@cypress/vue';
import mock from './mock';
import Component from '../../../src/components/Component'

import { extensions } from '../base/extend';
import { Quasar } from 'quasar'
import * as HelperModule from '../../../src/helpers'

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

    it("Stub example", () => {
        cy.stub(HelperModule, 'get', async (path, cb) => {
            return await import(
                `../fixtures/${path}.json`
                ).then((data) => {
                    cb(data)
            })
        })
            .as('get')
        mount(Component, {
            propsData: mock.test,
            extensions
        })
    })
})
