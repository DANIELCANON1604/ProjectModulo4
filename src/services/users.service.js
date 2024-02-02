class UsersService {

    constructor() {
        this.usersMap = new Map();
    }

    addUser(user) {
        this.usersMap.set(user.id, user);
        return user;
    }

    getUsers() {
        return Array.from(this.usersMap.values());
    }

    getUserById(id) {
        return this.usersMap.get(id);
    }

    updateUser(id, data) {
        if (this.usersMap.has(id)) {
            const user = this.usersMap.get(id);
            const updatedUser = { ...user, ...data };
            this.usersMap.set(id, updatedUser);
            return updatedUser;
        } else {
            throw new Error("Usuario no encontrado");
        }
    }

    deleteUser(id) {
        const user = this.usersMap.get(id);
        if (user) {
            this.usersMap.delete(id);
            return user;
        } else {
            throw new Error("Usuario no encontrado");
        }
    }
}

export default new UsersService();