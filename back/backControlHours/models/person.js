const getPersonById = (idUser,idList, idPerson)=> {
 return new Promise((resolve, reject)=> {
     dd.query('SELECT * FROM persons WHERE id = ? AND fk_list = ? AND fk_user = ?',[idPerson,idList,idUser],(error,row)=> {
        if (error) {
            reject(error);
        } else {
            if (rows.length < 1 ) {
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