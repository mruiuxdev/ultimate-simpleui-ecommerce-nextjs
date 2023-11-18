import CreateCategory from "@/components/category/CreateCategory";
import ListCategory from "@/components/category/ListCategory";
import React from "react";

const AdminCategory = () => {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Create Category</p>
          <CreateCategory />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="lead">List of Categories</p>
          <ListCategory />
        </div>
      </div>
    </div>
  );
};

export default AdminCategory;
