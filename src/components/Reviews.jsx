import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEnvelope, faStar} from '@fortawesome/free-solid-svg-icons'

import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
<div className='mainswiper'>
<div className='swiperinner'>
<section id='reviews'>
<h1>Get inspired by someone like you</h1>
        </section>
  <h2>Who is now living their dream at top-tech companies</h2>
</div>


<div className='swipercenter'>

<Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <section>
<div className='container'>
  <div className='content'>
    <div className='card'>
      <div className='card-content'>
        <div className='image'>
          <img src="./logo512.png" alt='img'/>
        </div>
        <div className='media-icons'>
           <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
           <h4><FontAwesomeIcon icon={faEarthAmericas}/></h4>
          <h4><FontAwesomeIcon icon={faStar}/></h4> 
        </div>
        <div className='name-profession'>
          <span className='name'>Jon</span>
          <span className='profession'>web Developer</span>
        </div>
        <div className='ratingicon'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
         
        </div>
       </div>
    </div>
  </div>
</div>
</section>
        </SwiperSlide>



        <SwiperSlide>
        <section>
<div className='container'>
  <div className='content'>
    <div className='card'>
      <div className='card-content'>
        <div className='image'>
          <img src="./logo512.png" alt='img'/>
        </div>
        <div className='media-icons'>
           <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
           <h4><FontAwesomeIcon icon={faEarthAmericas}/></h4>
          <h4><FontAwesomeIcon icon={faStar}/></h4> 
        </div>
        <div className='name-profession'>
          <span className='name'>Jon</span>
          <span className='profession'>web Developer</span>
        </div>
        <div className='ratingicon'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
         
        </div>
       </div>
    </div>
  </div>
</div>
</section>
        </SwiperSlide>



        <SwiperSlide>
        <section>
<div className='container'>
  <div className='content'>
    <div className='card'>
      <div className='card-content'>
        <div className='image'>
          <img src="./logo512.png" alt='img'/>
        </div>
        <div className='media-icons'>
           <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
           <h4><FontAwesomeIcon icon={faEarthAmericas}/></h4>
          <h4><FontAwesomeIcon icon={faStar}/></h4> 
        </div>
        <div className='name-profession'>
          <span className='name'>Jon</span>
          <span className='profession'>web Developer</span>
        </div>
        <div className='ratingicon'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
         
        </div>
       </div>
    </div>
  </div>
</div>
</section>

        </SwiperSlide>





        <SwiperSlide>

        <section>
<div className='container'>
  <div className='content'>
    <div className='card'>
      <div className='card-content'>
        <div className='image'>
          <img src="./logo512.png" alt='img'/>
        </div>
        <div className='media-icons'>
           <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
           <h4><FontAwesomeIcon icon={faEarthAmericas}/></h4>
          <h4><FontAwesomeIcon icon={faStar}/></h4> 
        </div>
        <div className='name-profession'>
          <span className='name'>Jon</span>
          <span className='profession'>web Developer</span>
        </div>
        <div className='ratingicon'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
         
        </div>
       </div>
    </div>
  </div>
</div>
</section>
        </SwiperSlide>



        <SwiperSlide>
        <section>
<div className='container'>
  <div className='content'>
    <div className='card'>
      <div className='card-content'>
        <div className='image'>
          <img src="./logo512.png" alt='img'/>
        </div>
        <div className='media-icons'>
           <h4><FontAwesomeIcon icon={faEnvelope}/></h4>
           <h4><FontAwesomeIcon icon={faEarthAmericas}/></h4>
          <h4><FontAwesomeIcon icon={faStar}/></h4> 
        </div>
        <div className='name-profession'>
          <span className='name'>Jon</span>
          <span className='profession'>web Developer</span>
        </div>
        <div className='ratingicon'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
         
        </div>
       </div>
    </div>
  </div>
</div>
</section>
        </SwiperSlide>




      </Swiper>

</div>

     
      <div className='swiperbutton'><button>read more</button>  </div>

      <div className='circulebutton'>< a  href="#top"><button type='button'>TOP</button></a> </div>
      </div>
    </>
  );
}
