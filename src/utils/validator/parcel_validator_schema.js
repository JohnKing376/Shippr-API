export const createParcelDeliveryValidator = {
    senderName: {
        isString: {
            errorMessage: 'sender name must be a string'
        },
        isLength: {
          options: {
              min: 3,
              max: 10
          },
          errorMessage: 'sender name must be at least 3 characters long and have a max of 10 characters'
        },
        notEmpty: {
            errorMessage: 'sender name is required'
        },
    },

    receiverName: {
        isString: {
            errorMessage: 'receiver name must be a string',
        },
        isLength: {
            options: {
                min: 3,
                max: 10
            },
            errorMessage: 'receiver name must be at least 3 characters long and have a max of 10 characters'
        },
        notEmpty: {
            errorMessage: 'receiver name is required'
        }
    },
    address: {
        isString: {
            errorMessage: 'address is required'
        },
        isLength: {
            options: {
                min: 3,
            },
            errorMessage: {
                errorMessage: 'address must be at least 3 characters',
            },
        },
        notEmpty: {
            errorMessage: 'address is required'
        }
    },

    receiversAddress: {
      isString: {
          errorMessage: 'receivers address must be a string'
      },
      isLength: {
          options: {
              min: 3,
          },
          errorMessage: 'receivers address must be at least 3 characters',
      },
      notEmpty: {
          errorMessage: 'receivers address is required'
      }
    },

    weight: {
        isInt: {
            errorMessage: 'weight must be a number',
        },
        notEmpty: {
            errorMessage: 'weight is required',
        }
    },

    status: {
        isArray: {
            errorMessage: 'status must be a an array',
        },
        isIn: {
            options: [['en-route', 'ongoing', 'cancelled', 'delivered']],
            errorMessage: 'status must be one of these values.. en-route, ongoing, cancelled, delivered ',
        },
        notEmpty: {
            errorMessage: 'status is required'
        }
    }
}

export const updateParcelDeliveryValidator = {
    senderName: {
        isString: {
            errorMessage: 'sender name must be a string'
        },
        isLength: {
            options: {
                min: 3,
                max: 10
            },
            errorMessage: 'sender name must be at least 3 characters long and have a max of 10 characters'
        },
        optional: true
    },

    receiverName: {
        isString: {
            errorMessage: 'receiver name must be a string',
        },
        isLength: {
            options: {
                min: 3,
                max: 10
            },
            errorMessage: 'receiver name must be at least 3 characters long and have a max of 10 characters'
        },
        optional: true
    },
    address: {
        isString: {
            errorMessage: 'address is required'
        },
        isLength: {
            options: {
                min: 3,
            },
            errorMessage: {
                errorMessage: 'address must be at least 3 characters',
            },
        },
        optional: true
    },

    receiversAddress: {
        isString: {
            errorMessage: 'receivers address must be a string'
        },
        isLength: {
            options: {
                min: 3,
            },
            errorMessage: 'receivers address must be at least 3 characters',
        },
        optional: true
    },

    weight: {
        isInt: {
            errorMessage: 'weight must be a number',
        },
        optional: true
    },

    status: {
        isArray: {
            errorMessage: 'status must be a an array',
        },
        isIn: {
            options: [['en-route', 'ongoing', 'cancelled', 'delivered']],
            errorMessage: 'status must be one of these values.. en-route, ongoing, cancelled, delivered ',
        },
        optional: true
    }
}