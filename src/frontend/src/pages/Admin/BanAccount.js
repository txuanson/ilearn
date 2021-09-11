import { message, Button, Input, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import { banAccount } from "../../api/admin";
import { Modal } from "antd";
import handleErrorApi from "../../utils/handleErrorApi";
import { getUserInfo } from "../../api/user";

export default function BanAccount({ id, fetch, valuePagination, Ban }) {
  const [dayDuration, setDayDuration] = useState(3);
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState();

  useEffect(async () => {
    try {
      const resRole = await getUserInfo(id);
      setRole(resRole);
    } catch (err) {
      handleErrorApi(err);
    }
  }, []);

  const ChangeHandler = (value) => {
    setDayDuration(value);
  };

  const onUnban = () => {
    onBan(-1);
  };

  const onBan = async (day) => {
    try {
      if (role != 10) {
        const res = await banAccount({ amount: day, user_id: id });
        setVisible(false);
        if (Ban) message.success("Unban account successfully!");
        else message.success("Ban account successfully!");
        fetch("", valuePagination);
        setDayDuration(3);
      }
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
            onOk={() => onUnban()}
            onCancel={() => setVisible(false)}
            okText="Confirm"
            width={500}
          >
            <h1 className="text-center ">Are you sure you want to unban?</h1>
          </Modal>
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
            onOk={() => onBan(dayDuration)}
            onCancel={() => setVisible(false)}
            okText="Confirm"
            width={300}
          >
            {/* <Input
              placeholder="Ban duration"
              value={dayDuration}
              onChange={ChangeHandler}
            /> */}
            <div style={{ textAlign: "center" }}>
              <InputNumber
                style={{ width: 150 }}
                min={1}
                max={100000}
                defaultValue={3}
                onChange={ChangeHandler}
              />
            </div>
          </Modal>
        </>
      )}
    </>
  );
}
