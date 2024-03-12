import { Swiper, SwiperSlide } from "swiper/react";
import { CheckCircleOutlined } from "@mui/icons-material";
import cosmetics from "./img/cosmetics.png";
import waterCircle from "./img/water_circle.png";
import cosmeticsSlide2 from "./img/kosmetika_slide2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import sliderStyles from "./slider.module.scss";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";

export default function Slider() {
  const breakpoints = {
    320: {
      navigation: {
        enabled: false,
      },
    },
    768: {
      navigation: {
        enabled: true,
      },
    },
    1440: {
      navigation: {
        enabled: true,
      },
    },
  };
  return (
    <>
      <Swiper
        navigation={{
          enabled: true,
        }}
        breakpoints={breakpoints}
        mousewheel={true}
        freeMode={true}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        modules={[Navigation, FreeMode, Autoplay]}
        className={sliderStyles.mySwiper}
      >
        <SwiperSlide className={sliderStyles.slide1}>
          <img src={cosmetics} alt="" />
          <div className={sliderStyles.slider1Content}>
            <h2>Косметика из натуральных ингридиентов</h2>
            <ul>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>
                  Консультанты-косметологи подберут то, что нужно вашей коже!
                </p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Доставка в день заказа</p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>100% эффективные натуральные составы</p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Органический сертификат</p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Эффективные формулы</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide className={sliderStyles.slide2}>
          <img src={waterCircle} alt="" className={sliderStyles.waterCircle} />
          <img
            src={cosmeticsSlide2}
            alt=""
            className={sliderStyles.cosmeticsSlide2}
          />
          <div className={sliderStyles.slider2Content}>
            <h2>Уход и увлажнение</h2>
            <ul>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Пополнение каждую неделю!</p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Скидки до 50%</p>
              </li>
              <li>
                <CheckCircleOutlined
                  className={sliderStyles.icon}
                  sx={{
                    fontSize: {
                      xs: 20,
                      md: 30,
                      lg: 40,
                    },
                  }}
                />
                <p>Подарочные сертификаты</p>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
