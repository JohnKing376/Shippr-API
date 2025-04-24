import {createId} from "@paralleldrive/cuid2";

class User {

    constructor() {
        this.users = []
    }

    /**
     * @description Method to create user
     * @param data
     * @returns {{firstName: *, lastName: *, createdAt: Date, password: *, id: string, updatedAt: Date}}
     * @memberOf User
     */
    createUser(data) {
        const newUser = {
            id: createId(),
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this.users.push(newUser)

        return newUser
    }

    /**
     * @description Method to get a user by its primary key
     * @param id
     * @returns {*}
     * @memberOf User
     */
    findOne(id) {
        return this.users.find(user => user.id === id);
    }

    /**
     * @description Method to list all users
     * @returns {*[]}
     * @memberOf User
     */
    findAll() {
        return this.users;
    }

    /**
     * @description Method to update a user by its identifier
     * @param id
     * @param data
     * @returns {*}
     * @memberOf User
     */
    update(id, data) {
        const user = this.users.findOne(id);
        const index = this.users.indexOf(user);

        this.users[index].firstName = data.firstName || user.firstName;
        this.users[index].lastName = data.lastName || user.lastName;
        this.users[index].password = data.password || user.password;
        this.users[index].updatedAt = new Date();

        return this.users[index];
    }

    /**
     * @description Method to delete one user by its identifier
     * @param id
     * @returns {string}
     * @memberOf User
     */
    delete(id) {
        const parcel = this.findOne(id)

        const index = this.users.indexOf(parcel)
        this.users.splice(index, 1)

        return `user with this id ${id} has been deleted successfully`
    }
}

export default new User()