define(['local_webworkers/worker'], function(worker) {
    return {
        init: function() {
            self.addEventListener('message', function(e) {
                self.postMessage({
                    type: 'TextMessage',
                    contentsString: e.data.contentsString,
                });
            });
            worker.workerSetupComplete();
        }
    };
});