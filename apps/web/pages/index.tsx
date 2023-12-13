import { Button } from "ui";
import {useEffect} from "react";

export default function Web() {

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            alert('FIND ME IN THE CHUNK? /// NODE_ENV: ' + process.env.NODE_ENV)
        }
    }, []);

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
