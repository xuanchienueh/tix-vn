import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function HomeMenu() {
  const [state, setState] = useState({ tabPosition: "left" });

  const { tabPosition } = state;
  return (
    <>
      <Tabs tabPosition={tabPosition}>
        <TabPane
          tab={
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-avatar-ngau-chat-hinh-dai-dien-ngau.jpg"
              className="rounded-full"
              width={100}
              height={50}
            />
          }
          key="1"
        >
          Content of Tab 1
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-chat-ngau-quai-vat-tim.jpg"
              className="rounded-full"
              width={100}
              height={50}
            />
          }
          key="2"
        >
          Content of Tab 2
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-chat-ngau-ngam-la-bai.jpg"
              className="rounded-full"
              width={100}
              height={50}
            />
          }
          key="3"
        >
          Content of Tab 3
        </TabPane>
      </Tabs>
    </>
  );
}
