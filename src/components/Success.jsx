import './Success.css';

const Success = ({
  order = {
    pizzaName: "Position Absolute Acı Pizza",
    size: "L",
    extras: ["Pepperoni", "Sosis", "Mısır", "Ananas", "Jalepeno"],
    choicesPrice: 25.0,
    totalPrice: 110.5,
  },
}) => {
  return (
    <div className="success-page">
      <h1 className="success-heading">TEKNOLOJİK YEMEKLER</h1>
      <p>Lezzetin yolda...</p>
      <h2>SİPARİŞ ALINDI!</h2>
      <p>{order.pizzaName}</p>
      <p>Boyut: {order.size}</p>
      <p>
        Ek Malzemeler:{" "}
        {order.extras && order.extras.length > 0
          ? order.extras.join(", ")
          : "Yok"}
      </p>
      <p>Sipariş Toplamı</p>
      <p>Seçimler {order.choicesPrice.toFixed(2)}₺</p>
      <p>Toplam {order.totalPrice.toFixed(2)}₺</p>
    </div>
  );
};

export default Success;