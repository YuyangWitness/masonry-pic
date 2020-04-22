
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export const invokeMasonry = () => {
  const grid = document.querySelector('.grid');
  const images = document.querySelectorAll('.grid-item');
  if(images.length > 0) {
    new imagesLoaded(grid, function() {
      new Masonry( grid, {
        itemSelector: '.grid-item',
        horizontalOrder: true,
        fitWidth: true,
        gutter: 5
      });
    });
  }
}