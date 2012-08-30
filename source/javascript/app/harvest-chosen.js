(function($) {

  function init() {
    var options = {},
        $selects = $("#project_selector, #expense_project_id"),
        $overflows = $(".select_overflow, td.category div:first"),
        ocss = {"overflow": "visible"};

    /* If we don"t see the project drop down, halt. */
    if ($selects.length === 0) {
      return;
    }

    $chosen = $selects.chosen(options);
    $overflows.css(ocss);
  }

  $(init);
} (jQuery));
