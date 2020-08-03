import browserSync from 'browser-sync';

const server = browserSync.create();

const reload = (done) => {
    server.reload();
    done();
};

const serve = (done) => {
    global.watch = true;
    server.init({
        proxy: 'localhost/myworld',
        notify: false
    });
    done();
};

export {
    server,
    reload,
    serve
};
