import { Button } from "ui";
import {useEffect} from "react";

export default function Web() {

    useEffect(() => {
        if (process.env.NODE_ENV !== 'production') {
            alert('FIND ME IN THE CHUNK? /// NODE_ENV: ' + process.env.NODE_ENV)
        }
    }, []);

    const clickHandler =() => {
        if (process.env.NODE_ENV !== 'production') {
            alert('FIND ME IN THE CHUNK? /// NODE_ENV: ' + process.env.NODE_ENV)
        } else {
            alert('Production environment!')
        }
    }

  return (
    <div>
      <h1>Web</h1>
        <p>Environment: {process.env.NODE_ENV}</p>
      <Button clickHandler={clickHandler} />
    </div>
  );
}
