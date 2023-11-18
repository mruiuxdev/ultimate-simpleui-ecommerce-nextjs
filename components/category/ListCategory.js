"use client";

import { useEffect } from "react";
import { useCategory } from "@/context/category";

const ListCategory = () => {
  const { fetchCategories, categories, setUpdatingCategory } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="my-5 d-flex flex-wrap gap-2">
      {categories?.map((category) => (
        <button
          key={category._id}
          className="btn"
          onClick={() => setUpdatingCategory(category)}
        >
          {category?.name}
        </button>
      ))}
    </div>
  );
};

export default ListCategory;
