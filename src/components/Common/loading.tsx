import { Spinner } from "@nextui-org/react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-10 my-14 mx-auto">
      <Spinner label="Loading..." color="primary" />
    </div>
  );
};
