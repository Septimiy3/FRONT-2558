import { useEffect, useState } from "react";
import logo from "./loader.gif";
import successIcon from "./successIcon.png";
import errorIcon from "./errorIcon.png";

const STATUS = {
  INIT: "init",
  PENDING: "pending",
  SUCCESS: 200,
  ERROR: "error",
  ERROR_NOT_FOUND: 404,
  ERROR_METHOD_NOT_ALLOWED: "error",
};

export const Request = () => {
  const [status, setStatus] = useState(STATUS.INIT);
  const [url, setUrl] = useState("");
  const statusContent = {
    [STATUS.PENDING]: { text: "Данные загружаются", icon: logo },
    [STATUS.SUCCESS]: { text: "Данные загружены", icon: successIcon },
    [STATUS.ERROR]: { text: "Данные не загружены", icon: errorIcon },
    [STATUS.ERROR_NOT_FOUND]: { text: "Ошибка 404", icon: errorIcon },
    [STATUS.ERROR_METHOD_NOT_ALLOWED]: { text: "Ошибка 405", icon: errorIcon },
  };

  const { text, icon } = statusContent[status] || {};

  //использовался сваггер для теста https://petstore.swagger.io/#/store/getInventory
  const fetchData = () => {
    setStatus(STATUS.PENDING);
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          setStatus(STATUS.SUCCESS);
        }
        if (response.status === 404) {
          setStatus(STATUS.ERROR_NOT_FOUND);
        }
        if (response.status === 405) {
          setStatus(STATUS.ERROR_METHOD_NOT_ALLOWED);
        }
        return response.json();
      })
      .then((data) => {
        if (data.code === 1) {
          setStatus(STATUS.ERROR);
        }
      })
      .catch((error) => {
        setStatus(STATUS.ERROR);
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
      {text && icon && (
        <>
          <div>{text}</div>
          <img src={icon} alt={status} />
        </>
      )}
    </>
  );
};
