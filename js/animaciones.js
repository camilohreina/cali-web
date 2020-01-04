var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letters'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letters',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })

anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 1455,
    delay: (el, i) => 1455 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 800,
    easing: "easeOutExpo",
    delay: 3200
  });
var textWrapper = document.querySelector('.ml10 .letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 3000,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
$( ".imagenuno" ).hover(
      function() {
        $( '#txt1' ).removeClass( "bounceOut" );
        $( '#txt1' ).addClass( "bounceIn" );
        $( '#txt1' ).css( "display", "block" );
      }, function() {
        $( '#txt1' ).addClass( "bounceOut" );
        $( '#txt1' ).removeClass( "bounceIn" );
      }
    );
$( ".imagendos" ).hover(
      function() {
        $( '#txt2' ).removeClass( "bounceOut" );
        $( '#txt2' ).addClass( "bounceIn" );
        $( '#txt2' ).css( "display", "block" );
      }, function() {
        $( '#txt2' ).addClass( "bounceOut" );
        $( '#txt2' ).removeClass( "bounceIn" );
      }
    );
$( ".imagentres" ).hover(
      function() {
        $( '#txt3' ).removeClass( "bounceOut" );
        $( '#txt3' ).addClass( "bounceIn" );
        $( '#txt3' ).css( "display", "block" );
      }, function() {
        $( '#txt3' ).addClass( "bounceOut" );
        $( '#txt3' ).removeClass( "bounceIn" );
      }
    );
$( ".imagencuatro" ).hover(
      function() {
        $( '#txt4' ).removeClass( "bounceOut" );
        $( '#txt4' ).addClass( "bounceIn" );
        $( '#txt4' ).css( "display", "block" );
      }, function() {
        $( '#txt4' ).addClass( "bounceOut" );
        $( '#txt4' ).removeClass( "bounceIn" );
      }
    );

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 1100) {
  $( '#t1' ).removeClass( "bounceOutLeft" );
  $( '#t1' ).addClass( "bounceInLeft" );
} else {
 $( '#t1' ).addClass( "bounceOutLeft" );
 $( '#t1' ).removeClass( "bounceInLeft" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 1100) {
  $( '#l1' ).removeClass( "bounceOutLeft" );
  $( '#l1' ).addClass( "bounceInLeft" );
} else {
 $( '#l1' ).addClass( "bounceOutLeft" );
 $( '#l1' ).removeClass( "bounceInLeft" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 2150) {
  $( '#t2' ).removeClass( "bounceOutRight" );
  $( '#t2' ).addClass( "bounceInRight" );
} else {
 $( '#t2' ).addClass( "bounceOutRight" );
 $( '#t2' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 2150) {
  $( '#l2' ).removeClass( "bounceOutRight" );
  $( '#l2' ).addClass( "bounceInRight" );
} else {
 $( '#l2' ).addClass( "bounceOutRight" );
 $( '#l2' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 3000) {
  $( '#t3' ).removeClass( "bounceOutLeft" );
  $( '#t3' ).addClass( "bounceInLeft" );
} else {
 $( '#t3' ).addClass( "bounceOutLeft" );
 $( '#t3' ).removeClass( "bounceInLeft" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 3000) {
  $( '#l3' ).removeClass( "bounceOutRight" );
  $( '#l3' ).addClass( "bounceInRight" );
} else {
 $( '#l3' ).addClass( "bounceOutRight" );
 $( '#l3' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 4000) {
  $( '#t4' ).removeClass( "bounceOutRight" );
  $( '#t4' ).addClass( "bounceInRight" );
} else {
 $( '#t4' ).addClass( "bounceOutRight" );
 $( '#t4' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 4000) {
  $( '#l4' ).removeClass( "bounceOutRight" );
  $( '#l4' ).addClass( "bounceInRight" );
} else {
 $( '#l4' ).addClass( "bounceOutRight" );
 $( '#l4' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 4900) {
  $( '#t5' ).removeClass( "bounceOutRight" );
  $( '#t5' ).addClass( "bounceInRight" );
} else {
 $( '#t5' ).addClass( "bounceOutRight" );
 $( '#t5' ).removeClass( "bounceInRight" );
}
  });
});

$(function() {
  $(window).scroll(function() {
if ($(window).scrollTop() > 4900) {
  $( '#l5' ).removeClass( "bounceOutRight" );
  $( '#l5' ).addClass( "bounceInRight" );
} else {
 $( '#l5' ).addClass( "bounceOutRight" );
 $( '#l5' ).removeClass( "bounceInRight" );
}
  });
});

$( ".ermitalug" ).hover(
      function() {
        $( '#serm' ).removeClass( "bounceOutLeft" );
        $( '#serm' ).addClass( "bounceInLeft" );
        $( '#serm' ).css( "display", "block" );
        $( '#term' ).removeClass( "bounceOutLeft" );
        $( '#term' ).addClass( "bounceInLeft" );
        $( '#term' ).css( "display", "block" );
      }, function() {
        $( '#serm' ).addClass( "bounceOutLeft" );
        $( '#serm' ).removeClass( "bounceInLeft" );
        $( '#term' ).addClass( "bounceOutLeft" );
        $( '#term' ).removeClass( "bounceInLeft" );
      }
    );

$( ".museolug" ).hover(
      function() {
        $( '#smus' ).removeClass( "bounceOutDown" );
        $( '#smus' ).addClass( "bounceInDown" );
        $( '#smus' ).css( "display", "block" );
        $( '#tmus' ).removeClass( "bounceOutDown" );
        $( '#tmus' ).addClass( "bounceInDown" );
        $( '#tmus' ).css( "display", "block" );
      }, function() {
        $( '#smus' ).addClass( "bounceOutDown" );
        $( '#smus' ).removeClass( "bounceInDown" );
        $( '#tmus' ).addClass( "bounceOutDown" );
        $( '#tmus' ).removeClass( "bounceInDown" );
      }
    );

$( ".cristolug" ).hover(
      function() {
        $( '#scris' ).removeClass( "bounceOutRight" );
        $( '#scris' ).addClass( "bounceInRight" );
        $( '#scris' ).css( "display", "block" );
        $( '#tcris' ).removeClass( "bounceOutRight" );
        $( '#tcris' ).addClass( "bounceInRight" );
        $( '#tcris' ).css( "display", "block" );
      }, function() {
        $( '#scris' ).addClass( "bounceOutRight" );
        $( '#scris' ).removeClass( "bounceInRight" );
        $( '#tcris' ).addClass( "bounceOutRight" );
        $( '#tcris' ).removeClass( "bounceInRight" );
      }
    );

$( ".gatolug" ).hover(
      function() {
        $( '#sgat' ).removeClass( "bounceOutLeft" );
        $( '#sgat' ).addClass( "bounceInLeft" );
        $( '#sgat' ).css( "display", "block" );
        $( '#tgat' ).removeClass( "bounceOutLeft" );
        $( '#tgat' ).addClass( "bounceInLeft" );
        $( '#tgat' ).css( "display", "block" );
      }, function() {
        $( '#sgat' ).addClass( "bounceOutLeft" );
        $( '#sgat' ).removeClass( "bounceInLeft" );
        $( '#tgat' ).addClass( "bounceOutLeft" );
        $( '#tgat' ).removeClass( "bounceInLeft" );
      }
    );
$( ".iglesialug" ).hover(
      function() {
        $( '#sigl' ).removeClass( "bounceOutUp" );
        $( '#sigl' ).addClass( "bounceInUp" );
        $( '#sigl' ).css( "display", "block" );
        $( '#tigl' ).removeClass( "bounceOutUp" );
        $( '#tigl' ).addClass( "bounceInUp" );
        $( '#tigl' ).css( "display", "block" );
      }, function() {
        $( '#sigl' ).addClass( "bounceOutUp" );
        $( '#sigl' ).removeClass( "bounceIn" );
        $( '#tigl' ).addClass( "bounceOutUp" );
        $( '#tigl' ).removeClass( "bounceIn" );
      }
    );

$( ".zoolug" ).hover(
      function() {
        $( '#szoo' ).removeClass( "bounceOutRight" );
        $( '#szoo' ).addClass( "bounceInRight" );
        $( '#szoo' ).css( "display", "block" );
        $( '#tzoo' ).removeClass( "bounceOutRight" );
        $( '#tzoo' ).addClass( "bounceInRight" );
        $( '#tzoo' ).css( "display", "block" );
      }, function() {
        $( '#szoo' ).addClass( "bounceOutRight" );
        $( '#szoo' ).removeClass( "bounceInRight" );
        $( '#tzoo' ).addClass( "bounceOutRight" );
        $( '#tzoo' ).removeClass( "bounceInRight" );
      }
    );
$( ".feria" ).hover(
      function() {
        $( '#sfer' ).removeClass( "zoomOutUp" );
        $( '#sfer' ).addClass( "zoomInDown" );
        $( '#sfer' ).css( "display", "block" );
        $( '#tfer' ).removeClass( "zoomOutUp" );
        $( '#tfer' ).addClass( "zoomInDown" );
        $( '#tfer' ).css( "display", "block" );
      }, function() {
        $( '#sfer' ).addClass( "zoomOutUp" );
        $( '#sfer' ).removeClass( "zoomInDown" );
        $( '#tfer' ).addClass( "zoomOutUp" );
        $( '#tfer' ).removeClass( "zoomInDown" );
      }
    );

$( ".petronio" ).hover(
      function() {
        $( '#spet' ).removeClass( "zoomOut" );
        $( '#spet' ).addClass( "zoomIn" );
        $( '#spet' ).css( "display", "block" );
        $( '#tpet' ).removeClass( "zoomOut" );
        $( '#tpet' ).addClass( "zoomIn" );
        $( '#tpet' ).css( "display", "block" );
      }, function() {
        $( '#spet' ).addClass( "zoomOut" );
        $( '#spet' ).removeClass( "zoomIn" );
        $( '#tpet' ).addClass( "zoomOut" );
        $( '#tpet' ).removeClass( "zoomIn" );
      }
    );

$( ".grupo" ).hover(
      function() {
        $( '#sgru' ).removeClass( "zoomOutDown" );
        $( '#sgru' ).addClass( "zoomInUp" );
        $( '#sgru' ).css( "display", "block" );
        $( '#tgru' ).removeClass( "zoomOutDown" );
        $( '#tgru' ).addClass( "zoomInUp" );
        $( '#tgru' ).css( "display", "block" );
      }, function() {
        $( '#sgru' ).addClass( "zoomOutDown" );
        $( '#sgru' ).removeClass( "zoomInUp" );
        $( '#tgru' ).addClass( "zoomOutDown" );
        $( '#tgru' ).removeClass( "zoomInUp" );
      }
    );

$( ".cholado" ).hover(
      function() {
        $( '#scho' ).removeClass( "flipOutX" );
        $( '#scho' ).addClass( "flipInX" );
        $( '#scho' ).css( "display", "block" );
        $( '#tcho' ).removeClass( "flipOutX" );
        $( '#tcho' ).addClass( "flipInX" );
        $( '#tcho' ).css( "display", "block" );
      }, function() {
        $( '#scho' ).addClass( "flipOutX" );
        $( '#scho' ).removeClass( "flipInX" );
        $( '#tcho' ).addClass( "flipOutX" );
        $( '#tcho' ).removeClass( "flipInX" );
      }
    );
$( ".cholado" ).hover(
      function() {
        $( '#scho' ).removeClass( "flipOutX" );
        $( '#scho' ).addClass( "flipInX" );
        $( '#scho' ).css( "display", "block" );
        $( '#tcho' ).removeClass( "flipOutX" );
        $( '#tcho' ).addClass( "flipInX" );
        $( '#tcho' ).css( "display", "block" );
      }, function() {
        $( '#scho' ).addClass( "flipOutX" );
        $( '#scho' ).removeClass( "flipInX" );
        $( '#tcho' ).addClass( "flipOutX" );
        $( '#tcho' ).removeClass( "flipInX" );
      }
    );
$( ".pandebono" ).hover(
      function() {
        $( '#span' ).removeClass( "flipOutX" );
        $( '#span' ).addClass( "flipInX" );
        $( '#span' ).css( "display", "block" );
        $( '#tpan' ).removeClass( "flipOutX" );
        $( '#tpan' ).addClass( "flipInX" );
        $( '#tpan' ).css( "display", "block" );
      }, function() {
        $( '#span' ).addClass( "flipOutX" );
        $( '#span' ).removeClass( "flipInX" );
        $( '#tpan' ).addClass( "flipOutX" );
        $( '#tpan' ).removeClass( "flipInX" );
      }
    );
$( ".chontaduro" ).hover(
      function() {
        $( '#schon' ).removeClass( "flipOutX" );
        $( '#schon' ).addClass( "flipInX" );
        $( '#schon' ).css( "display", "block" );
        $( '#tchon' ).removeClass( "flipOutX" );
        $( '#tchon' ).addClass( "flipInX" );
        $( '#tchon' ).css( "display", "block" );
      }, function() {
        $( '#schon' ).addClass( "flipOutX" );
        $( '#schon' ).removeClass( "flipInX" );
        $( '#tchon' ).addClass( "flipOutX" );
        $( '#tchon' ).removeClass( "flipInX" );
      }
    );
$( ".manjar" ).hover(
      function() {
        $( '#sman' ).removeClass( "flipOutX" );
        $( '#sman' ).addClass( "flipInX" );
        $( '#sman' ).css( "display", "block" );
        $( '#tman' ).removeClass( "flipOutX" );
        $( '#tman' ).addClass( "flipInX" );
        $( '#tman' ).css( "display", "block" );
      }, function() {
        $( '#sman' ).addClass( "flipOutX" );
        $( '#sman' ).removeClass( "flipInX" );
        $( '#tman' ).addClass( "flipOutX" );
        $( '#tman' ).removeClass( "flipInX" );
      }
    );
$( ".champus" ).hover(
      function() {
        $( '#scha' ).removeClass( "flipOutX" );
        $( '#scha' ).addClass( "flipInX" );
        $( '#scha' ).css( "display", "block" );
        $( '#tcha' ).removeClass( "flipOutX" );
        $( '#tcha' ).addClass( "flipInX" );
        $( '#tcha' ).css( "display", "block" );
      }, function() {
        $( '#scha' ).addClass( "flipOutX" );
        $( '#scha' ).removeClass( "flipInX" );
        $( '#tcha' ).addClass( "flipOutX" );
        $( '#tcha' ).removeClass( "flipInX" );
      }
    );
$( ".lulada" ).hover(
      function() {
        $( '#slul' ).removeClass( "flipOutX" );
        $( '#slul' ).addClass( "flipInX" );
        $( '#slul' ).css( "display", "block" );
        $( '#tlul' ).removeClass( "flipOutX" );
        $( '#tlul' ).addClass( "flipInX" );
        $( '#tlul' ).css( "display", "block" );
      }, function() {
        $( '#slul' ).addClass( "flipOutX" );
        $( '#slul' ).removeClass( "flipInX" );
        $( '#tlul' ).addClass( "flipOutX" );
        $( '#tlul' ).removeClass( "flipInX" );
      }
    );
$( ".sancocho" ).hover(
      function() {
        $( '#ssan' ).removeClass( "flipOutX" );
        $( '#ssan' ).addClass( "flipInX" );
        $( '#ssan' ).css( "display", "block" );
        $( '#tsan' ).removeClass( "flipOutX" );
        $( '#tsan' ).addClass( "flipInX" );
        $( '#tsan' ).css( "display", "block" );
      }, function() {
        $( '#ssan' ).addClass( "flipOutX" );
        $( '#ssan' ).removeClass( "flipInX" );
        $( '#tsan' ).addClass( "flipOutX" );
        $( '#tsan' ).removeClass( "flipInX" );
      }
    );
$( ".parqueperrouno" ).hover(
      function() {
        $( '#spar' ).removeClass( "bounceOutLeft" );
        $( '#spar' ).addClass( "bounceInRight" );
        $( '#spar' ).css( "display", "block" );
        $( '#tpar' ).removeClass( "bounceOutLeft" );
        $( '#tpar' ).addClass( "bounceInRight" );
        $( '#tpar' ).css( "display", "block" );
      }, function() {
        $( '#spar' ).addClass( "bounceOutLeft" );
        $( '#spar' ).removeClass( "bounceInRight" );
        $( '#tpar' ).addClass( "bounceOutLeft" );
        $( '#tpar' ).removeClass( "bounceInRight" );
      }
    );

$( ".merced" ).hover(
      function() {
        $( '#smer' ).removeClass( "bounceOutRight" );
        $( '#smer' ).addClass( "bounceInLeft" );
        $( '#smer' ).css( "display", "block" );
        $( '#tmer' ).removeClass( "bounceOutRight" );
        $( '#tmer' ).addClass( "bounceInLeft" );
        $( '#tmer' ).css( "display", "block" );
      }, function() {
        $( '#smer' ).addClass( "bounceOutRight" );
        $( '#smer' ).removeClass( "bounceInLeft" );
        $( '#tmer' ).addClass( "bounceOutRight" );
        $( '#tmer' ).removeClass( "bounceInLeft" );
      }
    );

$( ".parqueingenio" ).hover(
      function() {
        $( '#sing' ).removeClass( "bounceOutLeft" );
        $( '#sing' ).addClass( "bounceInRight" );
        $( '#sing' ).css( "display", "block" );
        $( '#ting' ).removeClass( "bounceOutLeft" );
        $( '#ting' ).addClass( "bounceInRight" );
        $( '#ting' ).css( "display", "block" );
      }, function() {
        $( '#sing' ).addClass( "bounceOutLeft" );
        $( '#sing' ).removeClass( "bounceInRight" );
        $( '#ting' ).addClass( "bounceOutLeft" );
        $( '#ting' ).removeClass( "bounceInRight" );
      }
    );