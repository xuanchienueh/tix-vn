import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();

  return (
    <div className="mt-16 h-[700px]">
      <section className="bg-coolGray-100 text-coolGray-800 mt-32">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full lg:w-1/3">
            <img
              src="https://cdn.tgdd.vn/Files/2020/06/08/1261696/moi-tai-bo-hinh-nen-asus-rog-2020-moi-nhat_800x450.jpg"
              alt="1"
            />
          </div>
          <div className="flex w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <div>
              <h2 className="text-3xl font-semibold leading-none">Kẻ thứ ba</h2>
              <p className="mt-4 mb-8 text-sm">Tình trạng: Đang chiếu</p>
              <p>
                Kẻ Thứ 3 là bộ phim kể về hành trình tìm cách cứu vợ của Quang
                Kha khi anh nhận ra anh đang có cơ hội rất lớn trong việc thay
                đổi quá khứ, giúp người vợ của mình có thể sống lại. Nhưng trong
                hành trình cứu vợ đó, anh đã khám phá ra những góc khuất của
                người vợ mà anh rất mực yêu thương, vậy liệu anh có còn muốn cứu
                vợ mình?
              </p>
            </div>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-red-600 text-coolGray-50">
              Get started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
