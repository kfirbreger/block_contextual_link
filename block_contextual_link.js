$(function() {
    // Finding all blocks
    $('div.block').each(function(index) {
        var block_id, block_module, block_delta, pointer;
        // Retrive the module and delta
        block_id = $(this).attr('id');
        // Removing the block- part
        block_id = block_id.substr(6);
        pointer = block_id.indexOf('-');
        block_module = block_id.substring(0, pointer);
        // Removing the module part and ending with the delta
        block_delta = block_id.substr(pointer+1);
        // Add the mouse enter/leave event
        $(this).bind('mouseenter', function() {
            var href_link, a, img;
            img = $('<img />').attr(Drupal.settings.block_contextual_link);
            href_link = '/admin/build/block/configure/' + block_module + '/' + block_delta;
            a = $('<a />').attr({
                class: 'block_contextual_link_button',
                href: href_link,
            }).append(img);
            $(this).prepend(a);
        });
        $(this).bind('mouseleave', function() {
            $('a.block_contextual_link_button').remove();
        })
    });
});