import { useEffect, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ProdukteList from "./ProdukteList";

import "./Home.css";

const Home = () => {
  const [produkte, setProdukte] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  async function fetchProdukteHandler() {
    setIsLoading(true);

    const response = await fetch(url);
    const data = await response.json();

    const transformedProdukte = data.map((produktData) => {
      return {
        id: produktData.id,
        rating: produktData.rating,
        name: produktData.name,
        price: produktData.price,
        description: produktData.description,
        image_link: produktData.image_link,
        category: produktData.category,
        product_colors: produktData.product_colors,
      };
    });

    setProdukte(transformedProdukte);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProdukteHandler();
  }, []);

  const removeItemHandler = (id) => {
    setProdukte(produkte.filter((produkt) => produkt.id !== id));
  };

  return (
    <div className="home">
      <Card className="wellcom">
        <h1>Wellcome back!!</h1>

        <Button onClick={fetchProdukteHandler}>fetch data again!!</Button>
      </Card>

      <section>
        {!isLoading && produkte.length > 0 && (
          <ProdukteList produkte={produkte} onRemove={removeItemHandler} />
        )}
        {!isLoading && produkte.length === 0 && <p>found no produkts !</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </div>
  );
};

export default Home;
