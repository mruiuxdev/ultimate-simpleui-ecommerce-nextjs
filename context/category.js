"use client";

import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [updatingCategory, setUpdatingCategory] = useState(null);

  const createCategory = async () => {
    try {
      const res = await fetch(`${process.env.API}/admin/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (res.ok) {
        const newCategory = await res.json();

        setName("");

        setCategories([newCategory, ...categories]);

        toast.success("Category created successfully", {
          position: "bottom-right",
        });
      } else {
        const err = await res.json();
        toast.error(err, { position: "bottom-right" });
      }
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Try again", { position: "bottom-right" });
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${process.env.API}/admin/category`);

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const categories = await res.json();

      setCategories(categories);
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Try again", { position: "bottom-right" });
    }
  };

  const updateCategory = async () => {
    try {
      const res = await fetch(
        `${process.env.API}/admin/category/${updatingCategory?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatingCategory),
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const updatedCategories = await res.json();

      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category._id === updatingCategory._id ? updatedCategories : category
        )
      );

      setUpdatingCategory(null);

      toast.success("Category updated successfully", {
        position: "bottom-right",
      });
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Try again", { position: "bottom-right" });
    }
  };

  const deleteCategory = async () => {
    try {
      const res = await fetch(
        `${process.env.API}/admin/category/${updatingCategory?._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const deletedCategory = await res.json();

      setCategories((prevCategories) =>
        prevCategories.filter(
          (category) => category._id !== deletedCategory?._id
        )
      );

      setUpdatingCategory(null);

      toast.success("Category deleted successfully", {
        position: "bottom-right",
      });
    } catch (err) {
      console.log(err);
      toast.error("An error occurred. Try again", { position: "bottom-right" });
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        name,
        setName,
        categories,
        setCategories,
        updatingCategory,
        setUpdatingCategory,
        createCategory,
        fetchCategories,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
