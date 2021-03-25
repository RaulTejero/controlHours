const getForId = (idUser,idList) => {
    return new Promise((resolve,reject)=> {
        db.query('select * from lists where id =? and fk_list_user = ?',[idList, idUser], (error, row) => {
            if (error) {
                reject(error);
            } else {
                if (row.length === 0) {
                    resolve(null)
                } else {
                    resolve(row);
                }  ;
            };
        });
    });
};
const deleteForId = (idUser,idList)=>{
    return new Promise((resolve, reject)=> {
        db.query("DELETE FROM lists where id = ? and fk_list_user = ?;", [idList, idUser],((error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        }));
    });
};
const create = ({title,descriptions, idUser})=>{
    return new Promise((resolve, reject)=> {
        db.query('INSERT INTO lists (title, descriptions, fk_list_user) values (?, ?, ?)', [title,descriptions,idUser],((error,result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            };
        }));
    });
};
const updateById = ({title,descriptions,idUser,idList})=> {
    console.log(idUser,idList,title, descriptions);
    return new Promise((resolve, reject)=> {
        db.query('UPDATE lists SET title = ?, descriptions = ? where id =? and fk_list_user = ? ',[title,descriptions,idUser,idList],(error, result)=> {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    })
}


module.exports = {
 getForId, create, deleteForId, updateById
}