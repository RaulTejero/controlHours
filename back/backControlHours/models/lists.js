const getAllLists = (idUser) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM lists WHERE fk_user = ?', [idUser], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                if (rows.length < 1) {
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