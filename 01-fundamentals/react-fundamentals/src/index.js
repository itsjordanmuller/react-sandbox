import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const bookTitle =
    "How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen";
  const bookAuthor = "David Brooks";
  return (
    <article className="book">
      <img
        src="./images/how-to-know-a-person-cover.jpg"
        alt="How to Know a Person Book Cover Art"
        className="book-img"
      />
      <h2 className="book-title">{bookTitle}</h2>
      <h4 className="book-author">{bookAuthor}</h4>
      {/* Methods Can Be Used in JSX JavaScript */}
      {/* <h4 className="book-author">{bookAuthor.toUpperCase()}</h4> */}
      {/* Will Compile with Errors, Can't Use Statements */}
      {/* <p>{let x = 6}</p> */}
      {/* Expression Will Work & Show 12 */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

// const Image = () => (
//   <img
//     src="./images/how-to-know-a-person-cover.jpg"
//     alt="How to Know a Person Book Cover Art"
//     className="book-img"
//   />
// );

// const Title = () => (
//   <h2 className="book-title">
//     How to Know a Person: The Art of Seeing Others Deeply and Being Deeply Seen
//   </h2>
// );

// const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return (
//     <h4 className="book-author" style={inlineHeadingStyles}>
//       {/* <h4
//       className="book-author"
//       style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
//     > */}
//       David Brooks
//     </h4>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
