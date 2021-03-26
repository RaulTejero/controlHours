const getAllPersons = (idUser, idList)=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM persons WHERE fk_list = ? AND fk_user = ?;",[idList,idUser], ((error,rows)=>{
            if(error) {
                reject(error);
            }else {
                if (rows.length < 1) {
                    resolve(null);
                } else {
                    resolve(rows);
                };
            };
        }));
    });
};

module.exports = {
    getAllPersons
};