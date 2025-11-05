/**
 * @typedef {Object} Snack
 * @property {number} id
 * @property {string} name
 * @property {string} tagline
 * @property {string} imageUrl
 * @property {number} price
 * @property {Set<string>} tags
 */

/**
 * @typedef {Object} SnackCollection
 * @property {number} id
 * @property {string} name
 * @property {'Highlight'|'Normal'} type
 * @property {Snack[]} snacks
 */

/**
 * @typedef {Object} Filter
 * @property {number} id
 * @property {string} name
 * @property {boolean} selected
 */

/**
 * @typedef {Object} CartItem
 * @property {Snack} snack
 * @property {number} quantity
 * @property {number} total
 */

export const ModelTypes = {
  Snack: 'Snack',
  SnackCollection: 'SnackCollection',
  Filter: 'Filter',
  CartItem: 'CartItem',
};
