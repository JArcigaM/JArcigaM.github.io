$(document).ready(function() {
    //Creates the dialog box using the dialog div on the page.
    $(".dialog").dialog({
        autoOpen: false, //Set to false so the dialog box doesn't open on the opening of the page
        modal: true
    });
    //On submission of the form it activates the dialogue box
    $(".contactForm").submit(function(event) {
        event.preventDefault();
        $(".dialog").dialog("open");
    });

    // Uses the JQuery plugin MailCheck to check the email input for misspelled email endings. https://plugins.jquery.com/mailcheck
    $('.email').on('blur', function() {
        $(this).mailcheck({
            //Suggested fixes if it detects similar inputed text
            domains: ['gmail.com', 'aol.com'], 
            secondLevelDomains: ['hotmail'], 
            topLevelDomains: ["com", "net", "org"],
            //Returns the suggestion to the suggestion div and unhides it.      
            suggested: function(element, suggestion) {
                $('.suggestion').html('Did you mean: ' + suggestion.full + '?').show();
            },
            //If there is no suggestion in the input box it hides the suggestion div. Does it by default when the page opens
            empty: function(element) {
                $suggestionBox.hide();
            }
        });
    });
});
