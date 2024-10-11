<?php
require_once(__DIR__.'/../../config.php');

$PAGE->set_url('/local/webworkerstest/shared_worker.php');
$PAGE->set_context(context_system::instance());
$PAGE->set_pagelayout('admin');

echo $OUTPUT->header();

$PAGE->requires->js_amd_inline(<<<EOL
require(['local_webworkerstest/sharedclient', 'jquery'], function(sharedClient, $) {
  let writeToScreen = function(message) {
    $('#workerresults').append('<p>Message from client ID: ' + message.clientId + '<br/>' + message.contentsString + '</p>');
  };
  sharedClient.init(writeToScreen);
});
EOL
);

echo '<div id="workerresults"><p>Messages from other tabs.</p></div>';

echo $OUTPUT->footer();