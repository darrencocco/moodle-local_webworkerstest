define(['local_webworkers/worker'], function(worker) {
    return {
        init: function(incomingTextMessageFunction) {
            let dedicatedWorker = new Worker(worker.getURI("local_webworkerstest/dedicatedworker"));
            dedicatedWorker.addEventListener("message", function(event) {
                switch (event.data?.type) {
                    case 'TextMessage':
                        incomingTextMessageFunction(event.data);
                        break;
                    default:
                        break;
                }
            });
            dedicatedWorker.postMessage({
                type: 'TextMessage',
                contentsString: 'I have for you a modest proposal.',
            });
        }
    };
});