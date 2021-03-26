const getAllLists = (idUser) => {
    return new Promise((resolve, reject) => {
        db.query('select * from lists where fk_user = ?', [idUser], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                if (rows.length === 0) {
                    resolve(null)
                } else {                    
                    resolve(rows)
                };
            };
        });
    });
};





module.exports = {
    getAllLists
}