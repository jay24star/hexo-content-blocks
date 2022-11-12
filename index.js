/********** Hexo Plugin: hexo-content-blocks ********** 
 *    _____       _                         _         * 
 *   / ____|     | |                       | |        * 
 *  | (___  _   _| | ____      ____ _ _ __ | |_ ___   * 
 *   \___ \| | | | |/ /\ \ /\ / / _` | '_ \| __/ __|  * 
 *   ____) | |_| |   <  \ V  V / (_| | | | | |_\__ \  * 
 *  |_____/ \__,_|_|\_\  \_/\_/ \__,_|_| |_|\__|___/  * 
 *                                                    * 
 ****************** Made By Sukwants ******************/


var openbutton = hexo.config.content_blocks.open_button;
var types = hexo.config.content_blocks.types;

{     /* Generate CSS styles for content boxes. */
  const map = { 0:0, 1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, A:10, B:11, C:12, D:13, E:14, F:15, a:10, b:11, c:12, d:13, e:14, f:15 };
  const rule = /\s*\|\|\s*/;
  for (var i in types) {
    var info = types[i].split(rule);
    if (info[0][0] == '#') info[0] = info[0].substring(1);
    types[i] = ['#' + info[0], 'rgba(' + (map[info[0][0]] * 16 + map[info[0][1]]) + ',' + (map[info[0][2]] * 16 + map[info[0][3]]) + ',' + (map[info[0][4]] * 16 + map[info[0][5]]) + ',.1)', info[1]];
  }

  var res = '';
  for (var i in types) {
    res = res + 'details.' + i + ',';
  }
  res = res.substring(0, res.length - 1) + '{display:block!important;padding-top:0!important;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)!important;position:relative!important;margin:1.5625em 0!important;padding:0 1em!important;border-left:.2em solid!important;border-radius:.1em!important;font-size:.9em!important;overflow:auto!important;}';
  for (var i in types) {
    res = res + 'details.' + i + ':not([open]),';
  }
  res = res.substring(0, res.length - 1) + '{padding-bottom:0!important;}';
  for (var i in types) {
    res = res + 'details.' + i + '{border-left-color:' + types[i][0] + '!important;}';
  }
  for (var i in types) {
    res = res + 'details.' + i + '>summary,';
  }
  res = res.substring(0, res.length - 1) + '{margin:0 -1em 1em -1em;padding:.4em .6em .4em .6em;border-bottom:.05em solid;font-weight:700;display:block;outline:none;cursor:pointer;}';
  for (var i in types) {
    res = res + 'details.' + i + '>summary{border-bottom-color:' + types[i][1] + ';background-color:' + types[i][1] + ';}';
  }
  for (var i in types) {
    res = res + 'details.' + i + ':not([open])>summary,';
  }
  res = res.substring(0, res.length - 1) + '{border-bottom:0;margin-bottom:0;}';
  for (var i in types) {
    res = res + 'details.' + i + '>summary>div.box-open-button,';
  }
  res = res.substring(0, res.length - 1) + '{float:right;}';
  for (var i in types) {
    res = res + 'details.' + i + '>summary>i,';
  }
  for (var i in types) {
    res = res + 'details.' + i + '>summary>div.box-open-button>i,';
  }
  res = res.substring(0, res.length - 1) + '{margin:0 .6125em 0 .6125em;}';
  for (var i in types) {
    res = res + 'details.' + i + '>summary>i{color:' + types[i][0] + ';}';
  }
  for (var i in types) {
    res = res + 'details.' + i + '>summary>div.box-open-button>i,';
  }
  res = res.substring(0, res.length - 1) + '{color:rgba(0,0,0,.26);}';
  for (var i in types) {
    res = res + 'details[open].' + i + '>summary>div.box-open-button>i,';
  }
  res = res.substring(0, res.length - 1) + '{transform:rotate(180deg);}';

  hexo.extend.helper.register('content_blocks_css', function() {
    return res;
  });
}


{ /* Replace content_box hexo tags with HTML codes. */
  function startsWith(s, str) {
    var len = str.length;
    if (len > s.length) {
      return false;
    }
    for (var i = 0; i < len; ++i) {
      if (s[i] != str[i]) {
        return false;
      }
    }
    return true;
  }
  function contentBox(args, content) {
    var type = 'note', title = 'Note', open = false;
    var len = args.length;
    for (var i = 0; i < len; ++i) {
      if (startsWith(args[i], 'type:')) {
        type = args[i].substring(5);
        if (title == 'Note') {
          title = type.substring(0, 1).toUpperCase() + type.substring(1);
        }
      }
      else if (startsWith(args[i], 'title:')) {
        title = args[i].substring(6);
      }
      else if (args[i] == 'open') {
        open = true;
      }
    }
    return '<details class="' + type + '"' + (open ? ' open' : '') + '><summary><i class="' 
         + types[type][2] + ' fa-fw"></i>' + title + '<div class="box-open-button"><i class="'
         + openbutton + ' fa-fw"></i></summary>' + content + '</details>';
  }

  hexo.extend.tag.register('contentbox', contentBox, {ends: true});
}
