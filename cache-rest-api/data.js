let users = [];
let currentId = 1;

module.exports = {
    getUsers: () => users,
    addUser: (user) => {
        user.id = currentId++;
        users.push(user);
    },
    updateUser: (id, updatedData) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { ...users[userIndex], ...updatedData };
            return users[userIndex];
        }
        return null;
    },
    deleteUser: (id) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            return users.splice(userIndex, 1);
        }
        return null;
    },
    getUserById: (id) => {
        const userIndex = users.findIndex(u => u.id === id);
        if (userIndex !== -1) {
            return users[userIndex];
        }
        return null;
    },
    
}