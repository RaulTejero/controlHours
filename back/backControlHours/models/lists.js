const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from lists', (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            };
        });
    });
};



module.exports = {
    getAll
}