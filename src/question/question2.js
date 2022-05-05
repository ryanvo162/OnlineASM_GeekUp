import React from 'react'

export default function Question2() {
  return (
    <div>
      Câu 2: Nếu có 2 CSS selector cùng ứng với 1 element thì style của element sẽ thực hiện như nào?
      <br />
      <br />
      CSS selector sẽ thực hiện theo mức độ ưu tiên:
      <br />
      - Theo thứ tự từ trên xuống trong CSS file. (Thấp nhất)
      <br />
      - Theo phân biệt cấp độ. (id sẽ cao hơn class)
      <br />
      - Theo inline-style, internal-style, external-style. {"(inline<internal<external)"}
      <br />
      - !important là cấp độ cuối cùng.(Cao nhất)
      <br />
    </div>
  );
}
