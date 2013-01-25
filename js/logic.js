$(document).ready(function() {

    /*
    Store the element containing the template code in a variable, for
    convenience. Also, store the target div.
    */
    var test1_template_el = $('#test1-template');
    var test1_target_el = $('#test1-target');

    /*
    Create a template using the code stored in `test1_template_el`.
    `test1_template` becomes a function that takes an object containing
    the data that the template uses.
    */
    test1_template = _.template(test1_template_el.html());

    /*
    Create an object containing the data the template needs.
    */
    var data1 = {
        'items': [
            {
                'id': 1,
                'name': 'An item',
                'description': 'This is an item\'s description.',
                'class': 'active'
            }, {
                'id': 2,
                'name': 'Another item',
                'description': 'This is another item\'s description.',
                'class': 'active'
            }, {
                'id': 3,
                'name': 'Last item',
                'description': 'This is the last item\'s description.',
                'class': 'inactive'
            }
        ]
    };

    /*
    Call the template, passing in this data. Place its html in a target div.
    */
    var html = test1_template(data1);
    test1_target_el.html(html);

});

