import { LoaderCircle } from "lucide-react";
import React from "react";
import AppLogo from "~/components/app-logo";

const Loading = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <AppLogo />
      <div className="flex gap-2">
        <h3> Loading</h3> <LoaderCircle className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
