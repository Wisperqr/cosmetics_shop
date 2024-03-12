import { SearchAppBar } from "../../components/appBar/AppBar";
import { FooterNavBar } from "../../components/footerNavBar/FooterNavBar";
import { YandexMap } from "../../components/yandexMap/yandexMap";
import contactStyles from "./contactsPage.module.scss";

export const ContactsPage = () => {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <SearchAppBar />
      <div className={contactStyles.contactsWrapper}>
        <h1>Контакты</h1>
        <p>
          Вы можете найти нас по адресу: г. Москва, ул. Торговая, дом 123, офис
          456
        </p>
        <p>
          Как добраться: Сокольническая линия метро, последний вагон из центра,
          выход в сторону Казанского вокзала.
        </p>
        {/* <div className={contactStyles.iframeDiv}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff87de93558171a8686badc650def2c9e84ffefb4864ed7820add44590aa913c&amp;source=constructor"
            width="100%"
            height="100%"
            frameborder="0"
            className="map"
          ></iframe>
        </div> */}
        <div style={{ maxWidth: "800px", height: "400px" }}>
          <YandexMap />
        </div>

        <p>Телефон отдела продаж: 8-495-123-45-67 (многоканальный)</p>
        <p>Телефон отдела оптовых продаж: 8-495-765-43-21</p>
        <p>Email: sales@myshop.ru</p>
        <h3>График работы офиса и склада:</h3>
        <div className={contactStyles.workTime}>
          <ul>
            <li>Понедельник</li>
            <li>Вторник</li>
            <li>Среда</li>
            <li>Четверг</li>
            <li>Пятница</li>
            <li>Суббота</li>
            <li>Воскресенье</li>
          </ul>
          <ul>
            <li>с 9:00 до 21:00</li>
            <li>с 9:00 до 21:00</li>
            <li>с 9:00 до 21:00</li>
            <li>с 9:00 до 21:00</li>
            <li>с 9:00 до 21:00</li>
            <li>с 10:00 до 20:00</li>
            <li>с 10:00 до 20:00</li>
          </ul>
        </div>
        <p>Заказы через сайт принимаются круглосуточно!</p>
        <h3>Реквизиты:</h3>
        <p>ИП Иванов Иван Иванович</p>
        <p>ОГРНИП: 123456789012345</p>
        <p>ИНН: 123456789012</p>
        <p>КПП: 123456789</p>
      </div>
      <FooterNavBar />
    </div>
  );
};
