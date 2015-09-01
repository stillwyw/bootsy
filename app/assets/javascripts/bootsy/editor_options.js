window.Bootsy = window.Bootsy || {};

var pageStylesheets = [];
$('link[rel="stylesheet"]').each(function () {
  pageStylesheets.push($(this).attr('href'));
});

window.Bootsy.options = $.extend(true, $.fn.wysihtml5.defaultOptions, {
  parserRules: {
    classes: {
      "wysiwyg-float-left": 1,
      "wysiwyg-float-right": 1,
      "wysiwyg-float-inline": 1
    },
    tags: {
      "cite": {
        "check_attributes": {
          "title": "alt"
        }
      },
      "img": {
        "check_attributes": {
                        "width": "numbers",
                        "alt": "alt",
                        "src": "url",
                        "height": "numbers",
                        'style': 'allow',
                        'class': 'allow'
        },
        "add_class": {
          "align": "align_img"
        }
      },
	  "style": {},
	  "script": {},
      // this allows youtube embed codes
      "iframe": {
        set_attributes: {
          "frameborder": "0",
          "allowfullscreen": "1"
        },
        check_attributes: {
          "width": "numbers",
          "height": "numbers",
          "src": "href"
        }
      }
    }
  },
  toolbar: {
    color: true
  },
  stylesheets: pageStylesheets
});
