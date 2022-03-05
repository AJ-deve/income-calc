import React, { useState } from "react";
import List from "./List";

const Columns = ({ list, setList }) => {
  return (
    <div>
      {list.map((item, index) => (
        <List
          item={item}
          key={index}
          id={index}
          list={list}
          setList={setList}
          name={item.name}
          dailySum={item.dailySum}
          workedDays={item.workedDays}
          fare={item.fare}
        />
      ))}
    </div>
  );
};

export default Columns;
