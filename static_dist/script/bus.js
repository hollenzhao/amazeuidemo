var bus = {};
bus.autoFocus = function() {
  //初始焦点
  var $firstfocus = $('.firstfocus').eq(0);
  $firstfocus.focus();
  // 回车自动切换焦点
  var $nexts = $('.next');
  if ($nexts.length > 0) {
    $nexts.keyup(function(e) {
      if (e.keyCode == 13) {
        var self = this;
        var nextIndex = -1;
        for (var i = 0; i < $nexts.length; i++) {
          var item = $nexts[i];
          if (item.isEqualNode(self)) {
            nextIndex = i + 1;
            break;
          }
        }
        if (nextIndex > 0 && nextIndex < $nexts.length) {
          $nexts.eq(nextIndex).focus().click();
        }
      }
    });
  }
};