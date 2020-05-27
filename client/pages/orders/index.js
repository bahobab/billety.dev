const OrderIndex = ({ orders }) => {
  return (
    <div>
      <h1>My Orders</h1>
      <ul className="list-group">
        {orders.map((order) => {
          return (
            <li key={order.id} className="list-group-item">
              {order.ticket.title} - {order.status}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
