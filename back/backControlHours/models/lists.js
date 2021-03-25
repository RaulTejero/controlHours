const getAllLitstForIdUser = (idUser) => {
    return new Promise((resolve, reject) => {
        db.query('select * from lists where fk_list_user = ?', [idUser], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows)
            };
        });
    });
};

const getListForId = (idList, idUser) => {
    return new Promise((resolve,reject)=> {
        db.query('select * from lists where id =? and fk_list_user = ?',[idList, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                resolve(row);
            }
        })
    })
}


module.exports = {
    getAllLitstForIdUser, getListForId
}