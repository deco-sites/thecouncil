/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayDrawer = signal(false);
const displayMenu = signal("initial");

const state = {
  displayDrawer,
  displayMenu,
};

export const useUI = () => state;
