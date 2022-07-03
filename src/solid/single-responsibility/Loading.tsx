import React from "react";

type LoadingProps = {
  children: React.ReactNode;
  check: boolean;
  deletingProcess: boolean;
};

const Loading = ({ children, check, deletingProcess }: LoadingProps) => {
  return (
    <div>
      {check ? children : "Loading"}
      {deletingProcess && "Deleting.."}
    </div>
    );
};

export default Loading;
