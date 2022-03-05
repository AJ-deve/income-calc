import React, { useState } from "react";
import { v4 as idgen } from "uuid";

const Createcolumn = ({ list, setList }) => {
  const [dMoney, setdMoney] = useState("");
  const [workingdays, setWorkingDays] = useState("");
  const [farre, setFarre] = useState("");
  const [names, setNames] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        name: names,
        dailySum: dMoney,
        workedDays: workingdays,
        fare: farre,
        id: idgen(),
      },
    ]);
    setWorkingDays("");
    setdMoney("");
    setFarre("");
    setNames("");
  };
  const daily = (e) => {
    setdMoney(e.target.value);
  };
  const days = (e) => {
    setWorkingDays(e.target.value);
  };
  const fare = (e) => {
    setFarre(e.target.value);
  };
  const named = (e) => {
    setNames(e.target.value);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div className="column">
          <input
            type="text"
            onChange={named}
            placeholder="Name"
            value={names}
          />
          <input
            type="text"
            onChange={daily}
            placeholder="Daily paid money"
            value={dMoney}
          />
          <input
            type="text"
            onChange={days}
            placeholder="Worked Days"
            value={workingdays}
          />
          <input
            type="text"
            onChange={fare}
            placeholder="Car Fee"
            value={farre}
          />
          <h1>Total</h1>
        </div>
        <button type="submit">+ Add a person</button>
      </form>
    </div>
  );
};

export default Createcolumn;
