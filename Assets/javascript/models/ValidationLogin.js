class LoginValidation {
    #attribute;
    setAttribute(attr) {
        this.#attribute = attr;
    }
    getAttribute() {
        return this.#attribute;
    }
    isNull(attribute) {
        let nullCheck = true;
        if (attribute.value === "" || attribute.value === null) {
            nullCheck = false;
        }
        return nullCheck;
    }
    checkLoginValidation(attribute) {
        let validateData = true;
        this.setAttribute(attribute)
        if (!this.isNull(this.getAttribute())) {
            console.log(`Please fill data in ${this.getAttribute.name}`);
            validateData = false;
        }
        return validateData;
    }
};