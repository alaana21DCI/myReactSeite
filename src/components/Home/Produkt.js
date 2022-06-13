import "./Produkt.css";
import Card from "../UI/Card";

const Produkt = (props) => {
  const colorArr = props.product_colors.map((item) => {
    const style = {
      key: item.title,
      background: `${item.hex_value.toLowerCase()}`,
      padding: "15px",
      listStyle: "none",
      display: "inline-block",
    };
    return <span style={style}></span>;
  });
  return (
    <Card className="produkt">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="infos">
        <bold>PRICE: {props.price} €</bold>{" "}
        <div>
          <span>rating: </span> <span className="rating">{props.rating}</span>{" "}
        </div>
      </div>
      <div className="content">
        <h3>{props.title}</h3>

        <p>{props.description}</p>
      </div>
      <div className="colors">
        <span>colors:</span>
        <div> {colorArr}</div>
      </div>

      <div className="btns">
        <button>to favorites</button>
        <button>to CARD</button>
        <button
          onClick={() => {
            props.onRemove(props.id);
          }}
        >
          remove
        </button>
      </div>
    </Card>
  );
};

export default Produkt;
