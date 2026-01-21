import { Suspense } from "react";
import ResetPassword from "@/components/reset-password";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
      </Suspense>
    </div>
  );
};

export default page;
