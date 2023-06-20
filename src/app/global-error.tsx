"use client";

import { useEffect } from "react";
import classes from "./error.module.css";

export default function Error({ error, reset }: any) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <section className={classes.container}>
          <div className={classes.message}>
            <h2>Oops...</h2>
            <p>Coś poszło nie tak(</p>
            <p>Proszę skontaktować się z administratorem strony!!!</p>
          </div>
        </section>
      </body>
    </html>
  );
}
