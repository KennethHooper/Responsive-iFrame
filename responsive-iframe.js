// Reloads the iFrame on window resize

$(window).resize(function() {

  $( '.container iframe' ).attr( 'src', function ( i, val ) { return val; });

});
