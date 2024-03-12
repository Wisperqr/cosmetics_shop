import ordersListStyles from "./orders.module.scss";
import { Order } from "../order/order";
import { useSelector } from "react-redux";
import { getOrders } from "../../../../redux/orders/ordersSelectors";

export const OrdersList = () => {
  const orders = useSelector(getOrders);
  return (
    <div className={ordersListStyles.wrapper}>
      <h1>Заявки</h1>
      <div className={ordersListStyles.orders}>
        {orders.map((order) => {
          return <Order order={order} key={order.id} />;
        })}
      </div>
    </div>
  );
};
