import React from "react";
import "./category.css";
import { Cards } from "../";
export const Category = ({ category }) => {
  return (
    <section className="Category" id={category.id}>
      <h2 className="category_title">{category.name}</h2>
      <Cards data={category.products} />
    </section>
  );
};
