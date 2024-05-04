"use client"; // Error components must be Client Components
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
//   it will print the error jab jab mere error change hoga matlab jab jab error ayege tab tab yeah useEffect chalega and jab jab uski value change hgoi to vo render hoga

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
