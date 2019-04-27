class Regex {
    /**
     * this package is checking that user input value is persian or not .
     */
    isPersian(String) {
        const regex = /^[\u0600-\u06FF\s]+$/;
        const regexRul = new RegExp(regex);
        return String.match(regexRul) !== null;
    }

    /**
     * this function is validating numbers
     */
    isNumber(number) {
        const regex = /^[+-]?\d+(\.\d+)?$/;
        const regexRul = new RegExp(regex);
        return regexRul.test(number)
        //return !!number.match(regexRul);
    }

    /**
     * this function is validating emails
     */

    isEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexRul = new RegExp(regex);
        return !!email.match(regexRul);
    }
}

module.exports = new Regex();