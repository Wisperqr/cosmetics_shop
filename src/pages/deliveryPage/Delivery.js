import {
  AccessTime,
  CreditCard,
  CurrencyExchange,
  DeliveryDining,
  LocalAtm,
  LocalShipping,
  Mail,
} from "@mui/icons-material";
import { SearchAppBar } from "../../components/appBar/AppBar";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import deliveryStyles from "./delivery.module.scss";

export const Delivery = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={deliveryStyles.deliveryWrapper}>
        <h1>Доставка</h1>
        <p>
          Наш интернет-магазин осуществляет доставку по Москве и регионам
          России:
        </p>
        <ul>
          <li key={"delivery"}>
            <DeliveryDining className={deliveryStyles.icon} />
            <p>Курьерская доставка по Москве — 200 руб.</p>
          </li>
          <li key={"shipping"}>
            <LocalShipping className={deliveryStyles.icon} />
            <p>
              Самовывоз из нашего пункта выдачи или розничного магазина –
              бесплатно!
            </p>
          </li>
          <li key={"mail"}>
            <Mail className={deliveryStyles.icon} />
            <p>
              Почтовая доставка по России — от 150 руб. в зависимости от адреса
              доставки.
            </p>
          </li>
        </ul>
        <p>Сроки доставки:</p>
        <ul>
          <li key={"accessTime1"}>
            <AccessTime className={deliveryStyles.icon} />
            <p>Курьерская доставка по Москве – на следующий день</p>
          </li>
          <li key={"accessTime2"}>
            <AccessTime className={deliveryStyles.icon} />
            <p>Самовывоз – на следующий день</p>
          </li>
          <li key={"accessTime3"}>
            <AccessTime className={deliveryStyles.icon} />
            <p>
              Почтовая доставка по России – от 3 до 14 дней в зависимости от
              региона
            </p>
          </li>
        </ul>
        <h3>
          Доставка осуществляется бесплатно при сумме заказа более 7000 рублей.
        </h3>
        <h2>Оплата</h2>
        <p>Вы можете оплатить заказ:</p>
        <ul>
          <li key={"payment1"}>
            <LocalAtm className={deliveryStyles.icon} />
            <p>Наличными курьеру или в пункте выдачи при получении заказа</p>
          </li>
          <li key={"payment2"}>
            <CreditCard className={deliveryStyles.icon} />
            <p>
              Банковской картой Visa, Mastercard или МИР через сайт при
              оформлении заказа
            </p>
          </li>
          <li key={"payment3"}>
            <CurrencyExchange className={deliveryStyles.icon} />
            <p>Наложенным платежом при заказе с доставкой Почтой России</p>
          </li>
        </ul>
      </div>
      <FooterNavBar />
    </div>
  );
};
