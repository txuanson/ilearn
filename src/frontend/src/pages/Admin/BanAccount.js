import { message, Button, Input } from "antd";
import React, { useState } from "react";
import { banAccount, deleteCategory } from "../../api/admin";
import { Modal } from "antd";
import handleErrorApi from "../../utils/handleErrorApi";

export default function BanAccount({ id, fetch, valuePagination, Ban }) {
  const [dayDuration, setDayDuration] = useState(-1);
  const [visible, setVisible] = useState(false);

  const ChangeHandler = (event) => {
    setDayDuration(event.target.value);
  };

  const onBan = async () => {
    try {
      const res = await banAccount({ amount: dayDuration, user_id: id });
      setVisible(false);
      if (Ban) message.success("Unban account successfully!");
      else message.success("Ban account successfully!");
      fetch("", valuePagination);
      setDayDuration(-1);
    } catch (error) {
      handleErrorApi(error);
    }
  };

  return (
    <>
      {Ban ? (
        <>
          <Button type="primary" onClick={() => setVisible(true)}>
            Unban
          </Button>
          <Modal
            title="Unban Account"
            centered
            visible={visible}
            onOk={() => onBan()}
            onCancel={() => setVisible(false)}
            okText="Confirm"
            width={500}
          ><h1 className = "text-center ">Are you sure you want to unban?</h1></Modal>
        </>
      ) : (
        <>
          <Button type="primary" danger onClick={() => setVisible(true)}>
            Ban
          </Button>
          <Modal
            title="Ban Account"
            centered
            visible={visible}
            onOk={() => onBan()}
            onCancel={() => setVisible(false)}
            okText="Confirm"
            width={500}
          >
            <Input
              placeholder="Ban duration"
              value={dayDuration}
              onChange={ChangeHandler}
            />
          </Modal>
        </>
      )}
    </>
  );
}
