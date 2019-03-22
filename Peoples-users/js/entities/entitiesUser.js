

class UserObj {
    constructor(gender, name, email, dobDate, picture, loginName) {
        this.gender = gender;
        this.name = name;
        this.email = email;
        this.dobDate = dobDate;
        this.picture = picture;
        this.loginName = loginName;
    }
    upperName() {
        this.name.first = this.name.first.charAt(0).toUpperCase();
        console.log(this.name.first);
    }
}

export default UserObj;