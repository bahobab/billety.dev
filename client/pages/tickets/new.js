import { useState } from "react";
import Router from "next/router";

import useRequest from "../../hooks/use-request";

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const { doRequest, errors } = useRequest({
    url: `/api/tickets`,
    method: `post`,
    body: { title, price },
    onSuccess: (ticket) => Router.push("/"),
  });

  const handleBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) {
      return;
    }

    setPrice(value.toFixed(2));
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const response = await doRequest();
  };

  return (
    <div>
      <h1>Create a Ticket</h1>
      <form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            placeholder="ticket title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipricetle">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            onBlur={handleBlur}
            type="number"
            className="form-control"
            id="price"
            placeholder="ticket price"
          />
        </div>
        {errors}
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
