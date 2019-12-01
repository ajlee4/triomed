'use strict';

"use strict";

var bonusBtn = document.querySelector('.bonus-btn');
var bonusTooltip = document.querySelector('.bonus-tooltip');
var detailsBtn = document.querySelector('.details-btn');
var sectionAboutInfo = document.querySelector('#about-info');
var sectionAboutSubInfo = document.querySelector('#about-subinfo');
var cardClient = document.querySelector('#card-client');
var backBtn = document.querySelector('.back-btn');
var resultBtn = document.querySelector('.result-btn');
var workSection = document.querySelector('.work-scheme');
var clientAdvice = document.querySelector('.client-advice');
var backWorkBtn = document.querySelector('.back-work-btn');
sectionAboutSubInfo.classList.remove('visible');

bonusBtn.onclick = function (e) {
  e.preventDefault();
  bonusTooltip.classList.add('visible');
  e.target.classList.add('hidden');
};

detailsBtn.onclick = function (e) {
  e.preventDefault();
  sectionAboutInfo.classList.add('hidden');
  sectionAboutSubInfo.classList.add('visible');
  cardClient.style.display = 'none';
  sectionAboutInfo.classList.remove('animated');
};

backBtn.onclick = function (e) {
  e.preventDefault();
  sectionAboutInfo.classList.remove('hidden');
  sectionAboutSubInfo.classList.remove('visible');
  bonusTooltip.classList.remove('visible');
  bonusBtn.classList.remove('hidden');
  cardClient.style.display = 'block';
  sectionAboutInfo.classList.add('animated');
};

resultBtn.onclick = function (e) {
  e.preventDefault();
  workSection.classList.add('hidden');
  clientAdvice.classList.add('visible');
  workSection.classList.remove('animated');
};

backWorkBtn.onclick = function (e) {
  e.preventDefault();
  clientAdvice.classList.remove('visible');
  workSection.classList.remove('hidden');
  workSection.classList.add('animated');
};