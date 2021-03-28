const getPersonById = (idUser, idList, idPerson) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM persons WHERE id = ? AND fk_list = ? AND fk_user = ?;', [idPerson, idList, idUser],
            (error, row) => {
                if (error) {
                    reject(error);//490 
                } else {
                    if (row.length < 1) {
                        resolve({error: 427 });
                    } else {
                        resolve(row);
                    };
                };
            });
    });
};

const create = ({ name, description, hoursInitial, hoursYielded, hoursRemaining, hoursUsed,
    hoursBagUsed, idList, idUser }) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO persons (nameFull,descriptions, hours_initials, hours_yielded, hours_remaining, hours_used, hours_bag_used, fk_list, fk_user ) VALUES (?,?,?,?,?,?,?,?,?);', [name, description, hoursInitial, hoursYielded, hoursRemaining, hoursUsed, hoursBagUsed, idList, idUser], (error, result) => {
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
        db.query('DELETE FROM persons WHERE id = ? AND fk_list = ? AND fk_user = ?;', [idPerson, idList, idUser], (error, row) => {
            if (error) {
                reject(error);//490
            } else {
                resolve(row);
            };
        });
    });
};

const updateById = (idUser, idList, idPerson, {  name, description, hoursInitial, hoursYielded, hoursRemaining, hoursUsed,
    hoursBagUsed}) => {
    return new Promise((resolve, reject) => {
        db.query('UPDATE persons SET nameFull = ?, descriptions = ?,  hours_initials = ?, hours_yielded = ?, hours_remaining = ?, hours_used = ?, hours_bag_used = ? WHERE id = ? AND fk_list = ? AND fk_user = ?;', [ name, description, hoursInitial, hoursYielded, hoursRemaining, hoursUsed,
            hoursBagUsed, idPerson, idList, idUser], (error, row) => {
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