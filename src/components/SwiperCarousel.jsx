import { Stack } from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Navigation } from "swiper/modules";

import { ExerciseCard } from "../components";
import { useScreenWidth } from "../hooks";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom CSS
import "./swiperCarousel.css";

export default function SwiperCarousel({ data }) {
  const { numCards } = useScreenWidth();

  return (
    <Swiper
      grabCursor={true}
      slidesPerView={numCards}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {data?.slice(0, 10).map((exercise) => (
        <SwiperSlide key={exercise.id}>
          <Stack alignItems="center" justifyContent="center">
            <ExerciseCard exercise={exercise} />
          </Stack>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
