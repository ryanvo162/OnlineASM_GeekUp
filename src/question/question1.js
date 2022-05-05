import React from 'react'

export default function Question1() {
  return (
    <div>
      Câu 1: Khi truy cập vào 1 trang web
      {"( VD: https://geekadventure.vn/ )"} trình duyệt sẽ làm gì?
      <br />
      <br />
      <ol>
        <li>
          <span>
            Trình duyệt kiểm tra tên miền với IP tương ứng của website.
            <br />
            <ul>
              <li>
                Trình duyệt kiểm tra cache của trình duyệt. Trình duyệt sẽ lưu
                giữ cache các bản ghi DNS(Domain Name System) trong một khoảng
                thời gian cho các trang web mà bạn đã truy cập trước đó.
              </li>
              <li>
                Trình duyệt kiểm tra OS cache. Nếu không tìm được trong cache
                của trình duyệt, nó sẽ tạo một cuộc gọi hệ thống
                {"(ví dụ gethostname trong Windows)"} đến hệ điều hành của máy
                tính để lấy bản ghi DNS vì OS cũng duy trì cache của DNS.
              </li>
              <li>
                Nó kiểm tra trong cache của router. Khi không tìm thấy trong máy
                tính của bạn, trình duyệt sẽ giao tiếp với router để lấy bản ghi
                DNS.
              </li>
              <li>
                Nếu vẫn không tìm thấy ở những nơi trên thì trình duyệt sẽ kiểm
                tra ISP(Internet Service Provider) cache.
              </li>
            </ul>
          </span>
        </li>
        <br />
        <li>
          <span>
            Sau đó trình duyệt khởi tạo một kết nối TCP(Transmission Control
            Protocol) đến máy chủ.
          </span>
          <ul>
            <li>
              Khi trình duyệt nhận được thông tin về địa chỉ IP, nó sẽ tạo một
              kết nối tới máy chủ tương ứng với địa chỉ đó để vận chuyển thông
              tin. Trình duyệt sử dụng giao thức mạng để xây dựng kết nối.
            </li>
          </ul>
        </li>
        <br />
        <li>
          <span>Server xử lý request và gửi trả về response</span>
          <ul>
            <li>
              Server xử lý những yêu cầu mà người dùng gửi lên. Và sau đó gửi
              trả về cho trình duyệt.
            </li>
            <li>
              Những phương thức điển hình như: GET, POST, PUT, DELETE, HEAD,
              OPTIONS, TRACE, CONNECT, PATCH.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
