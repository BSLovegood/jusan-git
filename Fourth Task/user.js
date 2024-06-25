class User {
    static userCount = 0;

    constructor(username) {
        this._username = username;
        User.userCount++;
    }

    get username() {
        return this._username;
    }
}