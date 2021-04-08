
const getAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM persons WHERE fk_list = ? AND fk_user = ?;",[idList,idUser], (error,rows)=>{
            if(error) {
                reject(error);
            }else {
                resolve(rows);
                };
        });
    });
};

const restoreHoursAllPersonsForIdList = (IdList, idUser) => {
    return new Promise((resolve,reject)=> {
        db.query("UPDATE persons SET hours_used = 0 , hours_bag_used = 0  WHERE fk_list = ? AND fk_user = ?; ",[IdList, idUser], (error, rows)=> {
            if (error) {
                reject(error);
            }else {
                resolve(rows);
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

const getTotalHoursYieldedAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT SUM(hours_yielded) as totalHoursBag FROM persons WHERE fk_list = ? AND fk_user = ? ;',[idList, idUser],(error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        });
    });
};

const getTotalHoursUsedBagAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query('SELECT SUM(hours_bag_used) AS totalHoursUsedBag FROM persons WHERE fk_list = ? AND fk_user = ? ;',[idList, idUser],(error,result)=> {
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
    restoreHoursAllPersonsForIdList,
    getTotalHoursInitialAllPersons,
    getTotalHoursYieldedAllPersons,
    getTotalHoursUsedBagAllPersons
};