import { message, Input, Empty } from "antd";

export const handleError = (text, defaultDescription, otherOptions) => {
  message.error(text);
};

export const handleSuccess = (text, defaultDescription = "", otherOptions) => {
  message.success(text);
};

export const dataEmpty = (description = "No Data") => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, color: '#CFCFCF'  }}>
      <Empty description={description} image={Empty.PRESENTED_IMAGE_DEFAULT} />
    </div>
  );
};