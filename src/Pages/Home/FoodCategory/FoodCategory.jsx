import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';


// import required modules
import { Pagination } from 'swiper/modules';
import Sectiontitle from '../../../Components/SectionTitle/Sectiontitle';

const FoodCategory = () => {
    return (
        <div>
          <Sectiontitle subHeading={"From 11:00am to 10:00pm"}
          
          Heading={"ORDER ONLINE"}>
            
          </Sectiontitle>
          <Swiper
        slidesPerView={4}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-28"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3></h3>
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        
        
      </Swiper>
        </div>
    );
};

export default FoodCategory;