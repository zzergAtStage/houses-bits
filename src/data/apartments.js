/**
 * apartments.js
 * 
 * Provides an array of sample apartment objects.
 * Each object contains id, title, location, price, and image URL.
 */

const apartments = [
  {
    id: 1,
    title: 'Modern Studio in Downtown',
    location: 'Podgorica, Montenegro',
    price: 300,                   // Monthly rent in EUR
    imageUrl: 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg'
  },
  {
    id: 2,
    title: 'Cozy 2-Bedroom Near Beach',
    location: 'Budva, Montenegro',
    price: 450,
    imageUrl: 'https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg'
  },
  {
    id: 3,
    title: 'Spacious 3-Bedroom Penthouse',
    location: 'Kotor, Montenegro',
    price: 800,
    imageUrl: 'https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg'
  }
];

export default apartments;