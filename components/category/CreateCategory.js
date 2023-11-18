"use client";

import { useCategory } from "@/context/category";

const CreateCategory = () => {
  const {
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
  } = useCategory();

  return (
    <div className="my-5">
      <input
        type="text"
        name="category"
        id="category"
        value={updatingCategory ? updatingCategory?.name : name}
        placeholder="Category Name"
        onChange={(e) =>
          updatingCategory
            ? setUpdatingCategory({ ...updatingCategory, name: e.target.value })
            : setName(e.target.value)
        }
        className="form-control p-2 my-2"
      />

      <div className="d-flex justify-content-between">
        <button
          className={`btn bg-${
            updatingCategory ? "info" : "primary"
          } text-light`}
          onClick={(e) => {
            e.preventDefault();

            updatingCategory ? updateCategory() : createCategory();
          }}
        >
          {updatingCategory ? "Update" : "Create"}
        </button>

        {updatingCategory && (
          <>
            <button
              className={`btn bg-danger text-light`}
              onClick={(e) => {
                e.preventDefault();

                deleteCategory();
              }}
            >
              Delete
            </button>

            <button
              className="btn bg-success text-light"
              onClick={() => setUpdatingCategory(null)}
            >
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateCategory;
