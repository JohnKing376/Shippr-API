export const createUserValidator = {
    firstName: {
        isLength: {
            options: { min: 3, max: 8 },
            errorMessage: 'first name should be at least 3 characters and have a max of 8 characters'
        },
        notEmpty: {
            errorMessage: 'first name is required'
        },
        isString: {
            errorMessage: 'first name should be a string'
        }
    },

    lastName: {
        notEmpty: {
            errorMessage: 'last name is required',
        },
        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: 'last name should be at least 3 characters long and have a max of 20 characters'
        },
        isString: {
            errorMessage: 'last name should be a string'
        }
    },

    password: {
        notEmpty: {
            errorMessage: 'password is required'
        },
        isLength: {
            options: {
                min: 8,
                max: 20,
                errorMessage: 'password should be at least 8 characters long and have a max character of 20'
            }
        }
    }
}


export const updateUserValidator = {
    firstName: {
        optional: true,

        isLength: {
            options: { min: 3, max: 8 },
            errorMessage: 'first name should be at least 3 characters and have a max of 8 characters'
        },
        isString: {
            errorMessage: 'first name should be a string'
        }
    },

    lastName: {
        optional: true,

        isLength: {
            options: { min: 3, max: 20 },
            errorMessage: 'last name should be at least 3 characters long and have a max of 20 characters'
        },
        isString: {
            errorMessage: 'last name should be a string'
        }
    },

    password: {
        optional: true,

        isLength: {
            options: {
                min: 8,
                max: 20,
                errorMessage: 'password should be at least 8 characters long and have a max character of 20'
            }
        }
    }
}