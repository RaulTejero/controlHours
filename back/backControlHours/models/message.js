const getAllMessage = (idList)=> {
    return new Promise ((resolve,reject)=> {
        db.query('SELECT * FROM message WHERE fk_list = ?',[idList],(error,rows)=> {
            if(error){
                reject(error);
            } else {
                resolve(rows);
            };
        });
    });
};

const createMessage = ({message, person,descriptions,hours, idList})=> {
    return new Promise((resolve, reject)=> {
        db.query('INSERT INTO message (message,person, descriptions, hours_bag, fk_list) VALUES (?,?,?,?,?);',[message, person,descriptions,hours, idList],(error,row)=>{
            if (error) {
                reject(error);
            } else {
                resolve(row);
            };
        });
    });
};

const deleteAllMessage = (idList)=>{
    return new Promise((resolve, reject)=> {
        db.query('DELETE FROM persons WHERE fk_list = ?;',[idList],(error,rows)=> {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
};



module.exports = {
    getAllMessage,
    deleteAllMessage,
    createMessage
};