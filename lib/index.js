
(function ($) {
  $.fn.MyForm = function (options) {
    this.settings = $.extend({
      'el': $(this) || []
    }, options);
    
    var el = this.settings.el;
    var priv = {};
    var arrayValue = [];

    // Public Methods - External methods
    Object.assign(this, {
      /**
       * Set the form 
       */
      'setForm': function () {
        $(el).append('<form class="form-group col-6 align-self-center" ></form>');

        $.each(this.settings, function(index, value) {
          if (value.type === 'text' || value.type === 'password' || value.type === 'checkbox') {
            $('form').append('<label>'+ value.label +'</label>');
            var input = jQuery('<input id="'+value.id+'" class="form-control" type="'+ value.type +'" placeholder="'+value.placeholder+'" >');
            input.change(function(){
              if(value.regex) {
                var reg = new RegExp(value.regex);
                if (!reg.test(input.val())) {
                  input.css('color', 'red');
                }
              }
            })
            $('form').append(input);
          }
          else if (value.type === 'select') {
            $('form').append('<select class="form-control mt-4"></select>');
            $('select').append('<option>'+value.label+'</option>')

            $.each(value.option, function(index, value) {
              $('select').append('<option value="'+value +'">'+ value +'</option>')
            });
          }
        }.bind(this));
        $('form').append('<button class="btn btn-primary mt-5">Submit</button>');

        return this;
      },

      'saveValue': function() {
        var array = []
        $('input').blur(function() {
          array[this.id] = $(this).val();
          console.log(array);
        })
      }
    });




    // Private Methods - Internal methods
    Object.assign(priv, {
      /**
       * Initialize the plugin
       */
      'init': function () {
        // Set a new task after touch "enter"
        this.setForm();
        // this.regexVal(this.saveValue());

        return this;
      }.bind(this)
    });

    // Initialise the plugin
    priv.init();
    return this;
  };
}(jQuery));