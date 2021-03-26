const getPersonById = (idUser, idList, idPerson) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM persons WHERE id = ? AND fk_list = ? AND fk_user = ?;', [idPerson, idList, idUser],
            (error, row) => {
                if (error) {
                    reject(error);
                } else {
                    if (row.length < 1) {
                        resolve(null);
                    } else {
                        resolve(row);
                    };
                };
            });
    });
};

const create = ({ name, description, hoursInitial, hours, hoursUsed, idList, idUser }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO persons (name,description, hours_initial, hours, hours_used, fk_list, fk_user ) VALUES (?,?,?,?,?,?,?,?);', [name, description, hoursInitial, hours, hoursUsed, idList, idUser], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        });
    });
};

const deleteForId = (idUser, idList, idPerson) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE INTO persons WHERE id = ? AND fk_list = ? AND fk_user = ?;', [idPerson, idList, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};

const updateById = (idUser, idList, idPerson, { name, descriptions, hoursInitial, hours, hoursUsed }) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE persons SET nameFull = ?, descriptions = ?, hours_initials = ?, hours = ?, hours_used = ?  WHERE id = ? AND fk_list = ? AND fk_user = ? );', [name, descriptions, hoursInitial, hours, hoursUsed, idPerson,idList,idUser ], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};


module.exports = {
    getPersonById,
    create,
    deleteForId,
    updateById,
}