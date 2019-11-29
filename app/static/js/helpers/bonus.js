"use strict";

var bonusBtn = document.querySelector('.bonus-btn');
var bonusTooltip = document.querySelector('.bonus-tooltip');
var detailsBtn = document.querySelector('.details-btn');
var sectionAboutInfo = document.querySelector('#about-info');
var sectionAboutSubInfo = document.querySelector('#about-subinfo');
var cardClient = document.querySelector('#card-client');
var backBtn = document.querySelector('.back-btn');
sectionAboutSubInfo.classList.remove('visible');
document.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target == bonusBtn) {
    bonusTooltip.classList.add('visible');
    e.target.classList.add('hidden');
  }

  if (e.target == detailsBtn) {
    sectionAboutInfo.classList.add('hidden');
    sectionAboutSubInfo.classList.add('visible');
    cardClient.style.display = 'none';
    sectionAboutInfo.classList.remove('animated');
  }

  if (e.target == backBtn) {
    sectionAboutInfo.classList.remove('hidden');
    sectionAboutSubInfo.classList.remove('visible');
    bonusTooltip.classList.remove('visible');
    bonusBtn.classList.remove('hidden');
    cardClient.style.display = 'block';
    sectionAboutInfo.classList.add('animated');
  }
});