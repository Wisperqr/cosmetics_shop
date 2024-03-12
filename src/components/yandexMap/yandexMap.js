import { YMaps, Map } from "@pbe/react-yandex-maps";
import yandexMapStyle from "./yandexMap.module.scss";

export const YandexMap = () => {
  return (
    <YMaps>
      <div className={yandexMapStyle.mapWrapper}>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          // width={"1000px"}
          width={"100%"}
          height={"400px"}
          //   style={{ margin: "15px 0" }}
        />
      </div>
    </YMaps>
  );
};
