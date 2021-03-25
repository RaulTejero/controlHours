const getAllPersons = (idList, idUser)=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM persons where fk_person_list = ? and fk_person_user = ?;",[idList,idUser], ((error,rows)=>{
            if(error) {
                reject(error);
            }else {
                if (rows.lenght === 0) {
                    resolve(null)
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