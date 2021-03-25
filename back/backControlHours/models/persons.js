const getAllUsersForListsId = (idList, idUser)=> {
    return new Promise((resolve, reject)=> {
        db.query("SELECT * FROM persons where fk_person_list = ? and fk_person_user = ?;",[idList,idUser], ((error,rows)=>{
            if(error) {
                console.log(error);
                reject(error);
            }else {
                resolve(rows);
                console.log(rows);
            }
        }))
    })
}


module.exports = {
    getAllUsersForListsId
}