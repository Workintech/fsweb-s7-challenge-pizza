import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderPizza.css";

const OrderPizza = () => {
  const navigate = useNavigate();
  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [adet, setAdet] = useState(1);
  const [not, setNot] = useState("");
  const [hata, setHata] = useState({});

  const malzemeListesi = [
    "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates",
    "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Sucuk", "Ananas", "Kabak"
  ];

  const handleMalzeme = (e) => {
    const val = e.target.value;
    setMalzemeler((prev) =>
      prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]
    );
  };

  const toplam = (85.5 + malzemeler.length * 5) * adet;

  const handleSubmit = (e) => {
    e.preventDefault();
    const yeniHata = {};
    if (!boyut) yeniHata.boyut = "Boyut seçmelisin.";
    if (!hamur) yeniHata.hamur = "Hamur seçmelisin.";
    if (Object.keys(yeniHata).length > 0) {
      setHata(yeniHata);
      return;
    }

    setHata({});
    navigate("/success");
  };

  return (
    <><form className="pizza-formu" onSubmit={handleSubmit}>
      <div className="pizza-banner">
        <h2 className="restaurant-name">Teknolojik Yemekler</h2>
        <nav className="breadcrumb">
          <span>Anasayfa</span> - <span>Seçenekler</span> - <span>Sipariş Oluştur</span>
        </nav>
        <h1 className="pizza-title">Position Absolute Acı Pizza</h1>
        <div className="pizza-meta">
          <span className="price">85.50₺</span>
          <span className="rating">⭐ 4.9 (200)</span>
        </div>
        <p className="description">
          Front-End Developer olarak <code>position:absolute</code> kullanıyorsan bu çok acı pizza tam sana göre.Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış,daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak,düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli bir yemektir.Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>

      <h3>Boyut Seç *</h3>
      <div className="secenek">
        {["S", "M", "L"].map((b) => (
          <label key={b}>
            <input
              type="radio"
              name="boyut"
              value={b}
              checked={boyut === b}
              onChange={(e) => setBoyut(e.target.value)} />
            {b}
          </label>
        ))}
      </div>
      {hata.boyut && <p className="hata">{hata.boyut}</p>}

      <h3>Hamur Seç *</h3>
      <select value={hamur} onChange={(e) => setHamur(e.target.value)}>
        <option value="">-Hamur Seç-</option>
        <option value="İnce">İnce</option>
        <option value="Normal">Normal</option>
        <option value="Kalın">Kalın</option>
      </select>
    {hata.hamur && <p className="hata">{hata.hamur}</p>}

      <h3>Ek Malzemeler</h3>
        <div className="secenek">
        {malzemeListesi.map((m, i) => (
          <label key={`${m}-${i}`}>
            <input
              type="checkbox"
              value={m}
              checked={malzemeler.includes(m)}
              onChange={handleMalzeme} />
            {m}
          </label>
        ))}
      </div>
    </form>
    
      <h3>Sipariş Notu</h3>
      <textarea
        value={not}
        onChange={(e) => setNot(e.target.value)}
        placeholder="Siparişine eklemek istediğin bir not var mı?" />
        
        <div className="adet-ve-toplam">
        <div className="adet-secimi">
          <button type="button" onClick={() => setAdet(Math.max(1, adet - 1))}>-</button>
          <span>{adet}</span>
          <button type="button" onClick={() => setAdet(adet + 1)}>+</button>
        </div> 
        
        <div className="toplam-alani">
          <p><strong>Sipariş Toplamı</strong></p>
          <p>Seçimler {(malzemeler.length * 5).toFixed(2)}₺</p>
          <p><strong>Toplam {toplam.toFixed(2)}₺</strong></p>
        </div>
      </div><button type="submit" className="siparis-ver-btn">SİPARİŞ VER</button></>
    
  );
};

export default OrderPizza;