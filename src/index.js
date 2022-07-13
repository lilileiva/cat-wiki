const app = require('./app.js');

try {
    app.listen(app.get('port'), () => {
        console.log('Server listening on port ->', app.get('port'))
    })
} catch (error) {
    console.log(error)
}