class Regex {
    /**
     * this package is checking that user input value is persian or not .
     */
    isPersian(string) {
        return /^[\u0600-\u06FF\s]+$/.test(string);
    }

    /**
     * this function is validating numbers
     */
    isNumber(number) {
        return /^[+-]?\d+(\.\d+)?$/.test(number)
    }

    /**
     * this function is validating emails
     */

    isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
}

module.exports = new Regex();
