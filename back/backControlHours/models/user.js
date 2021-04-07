
const create = ({username, mail, password})=> {
    return new Promise( (resolve, reject)=>{
        db.query("INSERT INTO users (name,mail,password) VALUES (?, ?, ?);",[username, mail, password],(error, row)=> {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};

const getUserByMail = (mail) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE mail = ? ;',[mail], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};
const getUserByMailAndId = (mail,id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE mail = ? AND id = ?;',[mail, id], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};

const update = ({id,username,mail,password})=> {
    return new Promise((resolve,reject)=> {
        db.query('UPDATE users SET name = ?, mail = ?, password = ? WHERE id = ? ;',[username,mail,password,id],(error,row)=> {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};
module.exports = {
    getUserByMail,
    getUserByMailAndId,
    create,
    update
}