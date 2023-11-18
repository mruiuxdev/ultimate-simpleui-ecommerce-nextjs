import AdminNav from "@/components/nav/AdminNav";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main>
      <AdminNav />
      {children}
    </main>
  );
};

export default AdminLayout;
