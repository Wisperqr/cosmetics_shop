import orderStyle from "./order.module.scss";

export const Order = ({ order }) => {
  function calcFinalSum() {
    let sum = 0;
    order.orderedProducts.forEach((prod) => {
      sum += +prod.newPrice;
    });
    return sum;
  }

  return (
    <div className={orderStyle.wrapper}>
      <div>
        <p style={{ marginBottom: "20px" }}>{`Создано: ${order.createdAt}`}</p>
        <p>{`Имя: ${order.name}`}</p>
        <p>{`Фамилия: ${order.lastName}`}</p>
        <p>{`Email: ${order.email}`}</p>
        <p>{`Номер телефона: ${order.phoneNumber}`}</p>
        <p>{`Адрес доставки: ${order.address}`}</p>
        <ul>
          <p>Заказыные товары:</p>
          {order.orderedProducts.map((prod) => {
            return <li key={prod.id}>{prod.name}</li>;
          })}
        </ul>
      </div>

      <h3>{`Итого: ${calcFinalSum()} руб.`}</h3>
    </div>
  );
};
