import React, { useState, useEffect } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Test() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl =
          "https://api.edamam.com/api/recipes/v2/?app_id=7ae29501&app_key=3e19e2b0aaffc38a41fb619411f34cb9&type=public";
       
        const searchUrl = `${baseUrl}&q=${encodeURIComponent(search)}`;

        console.log("Search URL:");
        const response = await fetch(searchUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result.hits[0].recipe);
        const fetchedRecipes = result.hits.map((hit) => {
          const label = hit.recipe.label;
          const image = hit.recipe.image;

          return { label, image };
        });

        setRecipes(fetchedRecipes);
        console.log(fetchedRecipes[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(event.target[0].value);
    console.log("search " + search);
  };
  return (
    <>
      <Navbar className="bg-body-tertiary justify-content-between">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onChange={handleChange}
              />
            </Col>
            <Col xs="auto">
              <Button onSubmit={handleSubmit} type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Navbar>
      <br />
      <br />
      <br />
      <div>
        <h2>Recipe List</h2>
        <br />
        <div className="row">
          {recipes.map((recipe, index) => (
            <div key={index} className="col-md-4">
              <h3>{recipe.label}</h3>
              <img
                src={recipe.image}
                alt={recipe.label}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Test;
