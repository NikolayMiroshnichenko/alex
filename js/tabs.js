"use strict";

function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab");
      document.getElementById(id).classList.remove("active");
    }
  };

  var change = function (e) {
    e.preventDefault();
    clear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}

function TabsSecond() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll("[data-tab-second]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener("click", change, false);
    }
  };

  var clear = function () {
    var menuElements = document.querySelectorAll("[data-tab-second]");
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove("active");
      var id = menuElements[i].getAttribute("data-tab-second");
      document.getElementById(id).classList.remove("active");
    }
  };

  var change = function (e) {
    e.preventDefault();
    clear();
    e.target.classList.add("active");
    var id = e.currentTarget.getAttribute("data-tab-second");
    document.getElementById(id).classList.add("active");
  };

  bindAll();
}

var connectTabs = new Tabs();
var connectSecondTabs = new TabsSecond();

