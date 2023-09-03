import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingAnimation = () => {
  const antIcon = (
    <LoadingOutlined style={{ color: "#212121", fontSize: 50 }} spin />
  );
  return (
    <div className="flex h-screen inset-0 fixed justify-center items-center  bg-white">
      <Spin size="large" indicator={antIcon} />
    </div>
  );
};

export default LoadingAnimation;
