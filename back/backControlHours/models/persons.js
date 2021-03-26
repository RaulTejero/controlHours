


const getAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM persons WHERE fk_list = ? AND fk_user = ?;",[idList,idUser], (error,rows)=>{
            if(error) {
                reject(error);
            }else {
                if (rows.length < 1) {
                    resolve(null);
                } else {
                    resolve(rows);
                };
            };
        });
    });
};

const getTotalHoursInitialAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT SUM(hours_initials) FROM persons  WHERE fk_list = ? AND fk_user = ? ;',[idList, idUser],(error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        });
    });
};

const getTotalHoursavailableAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT SUM(hours) FROM persons WHERE fk_list = ? AND fk_user = ? ;',[idList, idUser],(error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        });
    });
};

const getTotalHoursUsedAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT SUM(hours_used) FROM persons WHERE fk_list = ? AND fk_user = ? ;',[idList, idUser],(error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        });
    });
};

module.exports = {
    getAllPersons,
    getTotalHoursInitialAllPersons,
    getTotalHoursUsedAllPersons,
    getTotalHoursavailableAllPersons
};