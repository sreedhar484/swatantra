import React from "react";

function Main() {
  const a = [
    1,
    1,
    2,
    3,
    7,
    4,
    4,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    6,
    8,
    9,
    3,
    9,
    0,
    5,
    0,
    5,
    9,
    0,
    1,
    1,
    2,
    3,
    7,
    4,
    4,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    6,
    8,
    9,
    3,
    9,
    0,
    5,
    0,
    5,
    9,
    0,
    1,
    1,
    2,
    3,
    7,
    4,
    4,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    6,
    8,
    9,
    3,
    9,
    0,
    5,
    0,
    5,
    9,
    0,
    1,
    1,
    2,
    3,
    7,
    4,
    4,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    6,
    8,
    9,
    3,
    9,
    0,
    5,
    0,
    5,
    9,
    0,
  ];
  return (
    <div>
      {a.map((data, id) => (
        <h1 key={id}>hii {data}</h1>
      ))}
    </div>
  );
}

export default Main;
