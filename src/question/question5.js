import React, { useEffect, useState } from "react";

export default function Question5() {
  const students = [
    {
      id: 1,
      name: "Jame",
      score: 9,
    },
    {
      id: 2,
      name: "Davis",
      score: 6,
    },
    {
      id: 3,
      name: "John",
      score: 7.5,
    },
    {
      id: 4,
      name: "Mary",
      score: 10,
    },
  ];
  const newStudents = students;
  newStudents
    .sort((a, b) => a.score - b.score)
    .forEach((student) => {
      student.score = Math.min(10, student.score + 0.5);
    });
  console.log(newStudents);
  return (
    <div>
      Section 4: Sau khi đoạn code trên thực hiện xong, students[0].score mang
      giá trị là bao nhiêu? Giải thích?
      <br />
      <br />
      <ul>
        <li>
          Kết quả của giá trị student[0].score= {students[0].score} vì student
          đã được sắp xếp từ nhỏ đến lớn và cộng thêm 0.5 ở những dòng code
          trên.
        </li>
      </ul>
    </div>
  );
}
