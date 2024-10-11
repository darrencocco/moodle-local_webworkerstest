define(['local_webworkers/worker'], function(worker) {
    return {
        init: function(incomingTextMessageFunction) {
            let sharedWorker = new SharedWorker(worker.getURI("local_webworkerstest/sharedworker"));
            sharedWorker.port.addEventListener("message", function(event) {
                switch (event.data?.type) {
                    case 'TextMessage':
                        incomingTextMessageFunction(event.data);
                        break;
                    default:
                        break;
                }
            });
            sharedWorker.port.start();
            sharedWorker.port.postMessage({
                type: 'TextMessage',
                clientId: sharedWorker.clientId,
                contentsString: 'I have for you a modest proposal.',
            });
        }
    };
});