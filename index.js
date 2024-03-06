function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());
    $("#image").attr('src', profile.getImageUrl());
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
    var accessToken = googleUser.getAuthResponse().access_token;
    // Call fetchUserProfile function if it's defined
    if (typeof fetchUserProfile === 'function') {
        fetchUserProfile(accessToken);
    }
}


function signOut(){
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        alert("You have been signed out successfully");
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    })
}