import helloService from "../services/helloService";
import { useEffect, useState } from "react"; 

const Hello = () => {
    //hooks
    const [hello, setHello] = useState(["pasensiya walang api"]);

    //hooks
    useEffect (() => {
        helloService.getHello()
        .then(
            response => {
                setHello(response.data);
            }
        )
        .catch(
            err => {
                console.log("Something went wrong!");
            }
        )
    })
    return hello;
}

export default Hello;