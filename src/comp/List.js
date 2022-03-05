import React from "react";

const List = ({ name, dailySum, workedDays, fare, item, list, setList }) => {
  const deleteHandler = () => {
    setList(list.filter((state) => state.id !== item.id));
  };

  return (
    <div>
      <div onClick={() => deleteHandler()} className="column">
        <div className="rows">
          <h1>{name}</h1>
        </div>
        <div className="rows">
          <h1>
            {`${dailySum.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })} won`}
          </h1>
        </div>
        <div className="rows">
          <h1>{`${workedDays} days`}</h1>
        </div>
        <div className="rows">
          <h1>
            {`${fare.toLocaleString(undefined, {
              maximumFractionDigits: 4,
            })} won`}
          </h1>
        </div>
        <div className="rows">
          <h1>
            {`${(dailySum * workedDays + Number(fare)).toLocaleString(
              undefined,
              {
                maximumFractionDigits: 2,
              }
            )} won`}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default List;
