/**
 * Created by kamilzych on 16/03/16.
 */
module.exports = function (repository) {
    return {
        stockUp: function (req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            repository.stockUp(isbn, count)
                .then(function (result) {
                    res.json({isbn: req.body.isbn, count: req.body.count});
                })
                .catch(next);
        },

        findAll: function (req, res, next) {
            repository.findAll()
                .then(function (docs) {
                    res.json(docs);
                })
                .catch(next);
        },

        getCount: function (req, res, next) {
            repository.getCount(req.params.isbn)
                .then(function (result) {
                    if (result !== null) {
                        res.format({
                            html: function () {
                                res.send('<div class="copiesLeft">' + result + '</div>')
                            },
                            json: function () {
                                res.status(200).json({count: result});
                            }
                        });
                    } else {
                        res.status(404).json({error: 'Error. No such ISBN'});
                    }

                })
                .catch(next);
        }
    };
};