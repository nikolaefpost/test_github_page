import browsersync from "browser-sync";

const bs = browsersync.create();

bs.init({
    server: {
        baseDir: "./",
    },
    notify: true,
    port: 3000,
})