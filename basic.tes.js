import { expect } from "chai"
import { describe, it } from "mocha";
describe('Environment Setup Verification', ()=> {
    it('Node.js is working',()=>{
        expect(process.version).to.equal('string');
    });

    it('Basic math operation',() =>{
        expect(2 + 2).to.equal(4);
    });

    it('ES modules are working', () =>{
        const testFunction = () => 'ES modules work!';
        expect(testFunction()).toBe('ES modules work!');
    });
});