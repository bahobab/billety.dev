// import buildClient from "../api/build-client";
import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  <h1>Landing Page</h1>;

  const renderTickets = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a href="">View</a>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>Available Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{renderTickets}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  // const client = buildClient(context);
  // const { data } = await client.get("/api/users/currentuser");

  // return data;
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
