const defaultBook = {
    id: 1,
    name: 'Default Book'
};

describe('Routes books', () => {
    describe('Route GET /books', () => {
        it('Should return a list of books', done => {
            request
                .get('/books')
                .end((err, res) =>{
                    expected(res.body[0].name).to.be.eql(defaultBook.name);
                    expected(res.body[0].id).to.be.eql(defaultBook.id);
                    done(err);
                });
        });
    });
});