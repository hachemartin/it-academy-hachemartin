var app=angular.module("app",[]);

app.value("tamanyoInicialRectangulo",{
  ancho:2,
  alto:3
});

function Rectangulo(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
  
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
  
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
  
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

app.service("rectangulo",['tamanyoInicialRectangulo',Rectangulo]);


app.controller("PruebaController",["$scope","rectangulo",function($scope,rectangulo) {
  $scope.area=rectangulo.getArea();
}]);