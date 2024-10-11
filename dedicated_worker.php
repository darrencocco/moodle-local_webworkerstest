<?php
require_once(__DIR__.'/../../config.php');

$PAGE->set_url('/local/webworkerstest/dedicated_worker.php');
$PAGE->set_context(context_system::instance());
$PAGE->set_pagelayout('admin');

echo $OUTPUT->header();

$PAGE->requires->js_amd_inline(<<<EOL
require(['local_webworkerstest/dedicatedclient', 'jquery'], function(dedicatedClient, $) {
  let writeToScreen = function(message) {
    $('#workerresults').append('<p>Message from dedicated worker <br/>' + message.contentsString + '</p>');
  };
  dedicatedClient.init(writeToScreen);
});
EOL
);

echo '<div id="workerresults"><p>Messages echoed back by the dedicated worker.</p></div>';

echo $OUTPUT->footer();