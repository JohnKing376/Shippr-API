import {createId} from "@paralleldrive/cuid2";

class User {

    constructor() {
        this.users = []
    }

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

    findOne(id) {
        return this.users.find(user => user.id === id);
    }

    findAll() {
        return this.users;
    }

    update(id, data) {
        const user = this.users.findOne(id);

        if(!user) {
            return new Error(`User with this id ${id} does not exist`);
        }

        const index = this.users.indexOf(user);

        this.users[index].firstName = data.firstName || user.firstName;
        this.users[index].lastName = data.lastName || user.lastName;
        this.users[index].password = data.password || user.password;
        this.users[index].updatedAt = new Date();

        return this.users[index];
    }

    delete(id) {
        const parcel = this.findOne(id)

        if(!parcel) {
            return new Error(`user with this id ${id} doesn't exist`)
        }

        const index = this.users.indexOf(parcel)
        this.users.splice(index, 1)

        return `user with this id ${id} has been deleted successfully`
    }
}

export default new User()