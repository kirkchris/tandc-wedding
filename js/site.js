$(function() {

  var loadPage = function() {
    var hash = window.location.hash;
    if (!hash || hash === '#') {
      hash = '#home';
    }
    hashElement = $('div' + hash);

    if (!hashElement || hashElement.length === 0) {
      hashElement = $('div#home');
    }

    $('div.page').hide();
    hashElement.show();
  };

  var openMenu = function() {
    $('.menu-current').hide();
    $('.menu-side').animate({
      left: '0px'
    });
    // $('.menu-side').toggleClass('open');
  }

  var closeMenu = function() {
    $('.menu-current').show();
    $('.menu-side').animate({
      left: '-151px'
    });
    // $('.menu-side').toggleClass('open');
  }

  $(window).on('hashchange', function() {
    loadPage();
  });

  $('.menu-current .menu-toggle').click(function(e) {
    e.preventDefault();
    openMenu();
  });

  $('.menu-side .menu-toggle').click(function(e) {
    e.preventDefault();
    closeMenu();
  });

  $('#side-menu a').click(function() {
    closeMenu();
  });

  loadPage();
});
