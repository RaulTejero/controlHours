const getForId = (idUser, idList) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM lists WHERE id =? AND fk_user = ?', [idList, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};
const deleteForId = (idUser, idList) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM lists WHERE id = ? AND fk_user = ?;", [idList, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};
const create = ({ title, descriptions, idUser }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO lists (title, descriptions, fk_user) VALUES (?, ?, ?);', [title, descriptions, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};
const updateById = (id, idUser, { title, descriptions }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE lists SET title = ?, descriptions = ? WHERE id = ? AND fk_user = ? ;',
            [title, descriptions, id, idUser],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(row);
                };
            });
    });
};


module.exports = {
    getForId, create, deleteForId, updateById
}