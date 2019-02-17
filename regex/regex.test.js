const {describe, it} = require('mocha');
const {expect} = require('chai');
const Regex = require('./index');
const email = "nima.2004hkh@gmail.com";
const PersianString = "نیما حبیب خدا";
const number = "123456789";

describe('Persian-Regex', () => {
    describe('#isPersian()', () => {
        it('should be a method', () => {
            expect(Regex).to.respondTo('isPersian');
        });

        it('should return True', () => {
            expect(Regex.isPersian(PersianString)).to.be.true;
        });

        it('should return False', () => {
            expect(Regex.isPersian(email)).to.be.false;
        });
    });

    describe('#isNumber()', () => {
        it('should be a method', () => {
            expect(Regex).to.respondTo('isNumber');
        });

        it('should return true', () => {
            const isNumber = Regex.isNumber(number);
            expect(isNumber).to.be.true;
        });

        it('should return False', () => {
            expect(Regex.isNumber(email)).to.be.false;
        });
    });

    describe('#isEmail()', () => {
        it('should be a method', () => {
            expect(Regex).to.respondTo('isNumber');
        });

        it('should return true', () => {
            const isEmail = Regex.isEmail(email);
            expect(isEmail).to.be.true;
        });

        it('should return False', () => {
            expect(Regex.isEmail(number)).to.be.false;
        });
    });
});
