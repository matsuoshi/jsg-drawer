jQuery(function($) {
  $('#drawerButton, #drawerOverlay').click(function(){
    $('#content, #drawerMenu, #drawerOverlay').toggleClass('drawerOpened');
  });
});
