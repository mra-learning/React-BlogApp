function loadb() {
    require(['../scripts/b'], function (foo) {
        //foo is now loaded.
        alert('loaded');
    });
}