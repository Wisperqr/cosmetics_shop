import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { useSelector } from "react-redux";
import { ProductCard } from "../productCard/productCard";
import { getAllProducts } from "../../redux/products/productsSelectors";

export default function DiscountsSlider() {
  const products = useSelector(getAllProducts);
  const breakpoints = {
    300: {
      slidesPerView: 2,

      spaceBetween: 0,
    },

    480: {
      slidesPerView: 2,

      spaceBetween: 0,
    },

    767: {
      slidesPerView: 3,

      spaceBetween: 0,
    },

    1000: {
      slidesPerView: 4,

      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,

      spaceBetween: 0,
    },

    1440: {
      slidesPerView: 5,

      spaceBetween: 0,
    },
  };

  return (
    <>
      <h2 style={{ margin: "30px", fontSize: "30px", color: "#283347" }}>
        Скидки
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,

          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={breakpoints}
        style={{
          paddingBottom: "30px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {products.map((product) => {
          if (product.oldPrice && product.newPrice) {
            return (
              <SwiperSlide
                key={`slide${product.id}`}
                style={{
                  backgroundColor: "#eee",
                  fontSize: "14px",
                }}
              >
                <ProductCard product={product} key={`${product.id}`} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
}
