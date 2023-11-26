"use strict";

const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav__list__item");
const rootElement = document.documentElement;

function toggleNav() {
	nav.classList.toggle("opened");
	burger.classList.toggle("opened");
	body.classList.toggle("opened");
}

burger.addEventListener("click", toggleNav);
navLinks.forEach((link) => link.addEventListener("click", toggleNav));

function handleBurgerReduction() {
	if (rootElement.scrollTop > 0) {
		burger.classList.add("reduced");
	} else {
		burger.classList.remove("reduced");
	}
}

document.addEventListener("scroll", handleBurgerReduction);
