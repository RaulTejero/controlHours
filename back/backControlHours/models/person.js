const getPersonById = (idUser,idList, idPerson)=> {
    console.log(idUser, idList,idPerson);
 return new Promise((resolve, reject)=> {
     db.query('SELECT * FROM persons WHERE id = ? AND fk_list = ? AND fk_user = ?;',[idPerson,idList,idUser],
     (error,row)=> {
        if (error) {
            reject(error);
        } else {
            if (row.length < 1 ) {
                resolve(null);
            } else {
                resolve(row);
            };
        };
     });
 });
};

// TODO: no va 
module.exports = {
    getPersonById
}