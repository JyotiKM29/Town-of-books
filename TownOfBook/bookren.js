

@media (max-width: 768px) {
    .carousel-inner .carousel-item > div {
        display: none;
    }
    .carousel-inner .carousel-item > div:first-child {
        display: block;
    }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
    display: flex;
}

/* large - display 6 */
@media (min-width: 992px) {
    
    .carousel-inner .carousel-item-right.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(50%);
    }
    
    .carousel-inner .carousel-item-left.active, 
    .carousel-inner .carousel-item-prev {
      transform: translateX(-50%);
    }
}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left{ 
  transform: translateX(0);
}
.movie-img {
	height:200px;width: 150px;background-color:  aqua;overflow: hidden;background-image: url("https://i.hizliresim.com/mX07R4.png");
	background-repeat:no-repeat;
	background-size: cover;
	object-fit: fill;
}

.movie-title {
	height: 40px; width:150px;background-color: black;overflow: hidden;
}
