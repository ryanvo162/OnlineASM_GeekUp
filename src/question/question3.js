import React from "react";

export default function Question3() {
  return (
    <div>
      Câu 3: Callback {"&"} Promise trong Javascript dùng để làm gì?
      <br />
      <br />
      Callback là một cách để đảm bảo code nhất định không thực thi cho đến khi
      code khác thực hiện xong. Bất kỳ hàm nào được truyền dưới dạng đối số được
      gọi là hàm callback.
      <br />
      <br />
      Promise (lời hứa) là một lời hứa hẹn sẽ làm một cái gì đó. Nó có thể được
      coi như là bản sao không đồng bộ của hàm getter.
      <br />
      Promise có thể thay thế việc sử dụng không đồng bộ các lệnh callback và có
      một số ưu điểm hơn.
      <br />
      Promise có thể ở một trong ba trạng thái:
      <br />
      - Đang chờ (pending)
      <br />
      - Đã thực hiện (fulfilled)
      <br />- Đã bị lỗi (rejected)
    </div>
  );
}
