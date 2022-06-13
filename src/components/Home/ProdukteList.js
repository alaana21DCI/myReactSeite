import Produkt from "./Produkt";
import "./ProdukteList.css";

const ProdukteList = (props) => {
  return (
    <div className="list">
      {props.produkte.map((produkt) => (
        <Produkt
          key={produkt.id}
          id={produkt.id}
          category={produkt.category}
          product_colors={produkt.product_colors}
          image={produkt.image_link}
          title={produkt.name}
          description={produkt.description}
          price={produkt.price}
          rating={produkt.rating}
          onRemove={props.onRemove}
        />
      ))}
    </div>
  );
};

export default ProdukteList;
