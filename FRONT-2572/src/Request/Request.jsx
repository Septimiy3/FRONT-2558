import { useEffect, useState } from "react";
import logo from "./loader.gif";
import successIcon from "./successIcon.png";
import errorIcon from "./errorIcon.png";

const STATUS = {
  INIT: "init",
  PENDING: "pending",
  SUCCESS: "success",
  ERROR: "error",
};

export const Request = () => {
  const [status, setStatus] = useState(STATUS.INIT);
  const [url, setUrl] = useState("");
  const statusContent = {
    [STATUS.PENDING]: { text: "Данные загружаются", icon: logo },
    [STATUS.SUCCESS]: { text: "Данные загружены", icon: successIcon },
    [STATUS.ERROR]: { text: "Данные не загружены", icon: errorIcon },
  };

  const { text, icon } = statusContent[status] || {};

  //использовался сваггер для теста https://petstore.swagger.io/#/store/getInventory
  const fetchData = async () => {
    setStatus(STATUS.PENDING);
    try {
      const response = await fetch(url);
      if (!response) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const result = await response.json();
      setStatus(STATUS.SUCCESS);
    } catch {
      setStatus(STATUS.ERROR);
    }
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

  return (
    <>
      <button onClick={setSuccessUrl}>Запрос с успешным ответом</button>
      <button onClick={setErrorUrl}>Запрос с ошибкой</button>
      {text && icon && (
        <>
          <div>{text}</div>
          <img src={icon} alt={status} />
        </>
      )}
    </>
  );
};
