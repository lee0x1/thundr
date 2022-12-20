import initMSG from '../lib/index';

import { expect } from 'chai';

describe('Initialization', () => { 
    it('1. initMSG should return a string', () => {
        expect(initMSG()).to.equal("thundr::running");
    });
});