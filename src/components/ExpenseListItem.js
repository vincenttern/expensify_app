import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import Truncate from "react-truncate";

export const ExpenseListItem = ({
  description,
  note,
  amount,
  createdAt,
  id
}) => {
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div className="list-item__info">
        <h3 className="list-item__title">{description}</h3>

        <div>
          <Truncate className="list-item__note" lines={1} ellipsis="...">
            {note}
          </Truncate>
        </div>

        <span className="list-item__sub-title">
          {moment(createdAt).format("MMMM Do, YYYY")}
        </span>
      </div>
      <h3 className="list-item__data">
        {numeral(amount / 100).format("$0,0.00")}
      </h3>
    </Link>
  );
};

export default ExpenseListItem;
