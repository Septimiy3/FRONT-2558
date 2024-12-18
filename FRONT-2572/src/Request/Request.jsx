import { useEffect, useState } from "react";
import logo from "./loader.gif";
import successIcon from "./successIcon.png";
import errorIcon from "./errorIcon.png";

const STATUS = {
  SUCCESS: 200,
  ERROR_NOT_FOUND: 404,
  ERROR_METHOD_NOT_ALLOWED: 405,
};

export const Request = () => {
  const [url, setUrl] = useState("");
  const [textRequest, setTextRequest] = useState("Ничего не происходит");
  const [logoRequest, setLogoRequest] = useState();

  //использовался сваггер для теста https://petstore.swagger.io/#/store/getInventory
  const fetchData = () => {
    setLogoRequest(logo);
    fetch(url)
      .then((response) => {
        if (response.status === STATUS.SUCCESS) {
          setTextRequest("Запрос выполнен");
          setLogoRequest(successIcon);
        }
        if (response.status === STATUS.ERROR_NOT_FOUND) {
          setTextRequest("Ошибка 404");
          setLogoRequest(errorIcon);
        }
        if (response.status === STATUS.ERROR_METHOD_NOT_ALLOWED) {
          setTextRequest("Ошибка 405");
          setLogoRequest(errorIcon);
        }
        return response.json();
      })
      .then((data) => {
        if (data.code === 1) {
          setTextRequest(data.message);
        }
      })
      .catch(() => {
        setTextRequest("Неизвестная ошибка");
      });
  };

  useEffect(() => {
    if (!url) return;
    fetchData();
  }, [url]);
  const setSuccessUrl = () => {
    setUrl("https://petstore.swagger.io/v2/store/inventory");
  };
  const setErrorUrl = () => {
    setUrl("https://petstore.swagger.io/v2/store/inventor");
  };
  const setErrorUrl2 = () => {
    setUrl("https://petstore.swagger.io/v2/store/");
  };
  const setErrorUrl3 = () => {
    setUrl(`https://petstore.swagger.io/v2/store/order/${0}`);
  };
  const setErrorUrl4 = () => {
    setUrl(`https://petstore.swagger.io/v2/pet/${1}`);
  };

  return (
    <>
      <button onClick={setSuccessUrl}>Запрос с успешным ответом</button>
      <button onClick={setErrorUrl}>Запрос с ошибкой</button>
      <button onClick={setErrorUrl2}>Запрос с ошибкой 2</button>
      <button onClick={setErrorUrl3}>Запрос с ошибкой 3</button>
      <button onClick={setErrorUrl4}>Запрос с ошибкой 4</button>
      <>
        <div>{textRequest}</div>
        <img src={logoRequest} alt={"status"} />
      </>
    </>
  );
};
