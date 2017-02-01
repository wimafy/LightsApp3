angular.module('lightShowApp')
  .controller('AuthCtrl', function(Auth, $state){
    var authCtrl = this;

    authCtrl.user = {
      email: '',
      password: ''
    };

    authCtrl.menu = [
      {
        link : '',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link : '',
        title: 'Friends',
        icon: 'group'
      },
      {
        link : '',
        title: 'Messages',
        icon: 'message'
      }
    ];

    authCtrl.login = function (){
      alert("first");
      Auth.$signInWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (auth){
        alert("wee");
        $state.go('homepage.projects');
      }, function (error){
        authCtrl.error = error;
        alert(error);
      });
    };

    authCtrl.register = function (){
      Auth.$createUserWithEmailAndPassword(authCtrl.user.email, authCtrl.user.password).then(function (user){
        $state.go('homepage.projects');
      }, function (error){
        authCtrl.error = error;
      });
    };
  });
