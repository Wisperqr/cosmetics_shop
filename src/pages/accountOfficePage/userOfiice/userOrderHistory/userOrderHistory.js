import { useSelector } from "react-redux";
import userOrderHistoryStyles from "./userOrderHistory.module.scss";
import { getUser } from "../../../../redux/user/userSelectors";

export const UserOrderHistory = () => {
  const authUser = useSelector(getUser);

  function calcTotalSum() {
    let sum = 0;
    authUser.orderHistory.map((prod) => {
      return (sum += +prod.newPrice);
    });
    return sum;
  }

  return (
    <div
      className={userOrderHistoryStyles.wrapper}
      style={{ maxWidth: "800px" }}
    >
      <h1>История заказов</h1>
      <div
        className={userOrderHistoryStyles.orderedProducts}
        style={{ maxWidth: "1200px" }}
      >
        {authUser.orderHistory.length === 0 ? (
          <div>Вы еще ничего не заказывали</div>
        ) : (
          authUser.orderHistory.map((prod) => {
            return (
              <div
                className={userOrderHistoryStyles.productWrapper}
                key={`orderedProduct${prod.id}`}
              >
                <img src={prod.image} alt="" />
                <p>{prod.name}</p>
                <h5>{`${prod.newPrice} руб.`}</h5>
              </div>
            );
          })
        )}
      </div>
      <hr />
      <div
        className={userOrderHistoryStyles.totalSum}
      >{`Вы заказали товаров на общую сумму: ${calcTotalSum()} рублей`}</div>
    </div>
  );
};
