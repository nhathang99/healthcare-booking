import LoginForm from "@/app/components/Auth/LoginForm";
import React from "react";

function page() {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-1 w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="hidden md:flex"></div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default page;
