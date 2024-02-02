import UsersService from "../services/users.service.js";

export const registerUser = (req, res) => {
    try {
        const { id, name, age, email } = req.body;
        const newUser = UsersService.addUser({ id, name, age, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getAllUsers = (req, res) => {
    const users = UsersService.getUsers();
    res.status(200).json(users);
};


export const getUserById = (req, res) => {
    const { id } = req.params;
    const user = UsersService.getUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};


export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, age, email } = req.body;
        const updatedUser = UsersService.updateUser(id, { name, age, email });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const deletedUser = UsersService.deleteUser(id);
    if (deletedUser) {
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};
