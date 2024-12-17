export const UnionAndIntersection = () => {
  type PersonDataType = number | string | Date;
  type PersonName = {
    name: string;
    lastName: string;
  };
  type PersonContact = {
    phone: number;
    mail: string;
  };

  type PersonInfo = PersonName & PersonContact;

  const isValidPersonInfo = (obj: any): obj is PersonInfo => {
    return (
      obj &&
      typeof obj.name === "string" &&
      typeof obj.lastName === "string" &&
      typeof obj.phone === "number" &&
      typeof obj.mail === "string"
    );
  };

  const name = "Олег";
  const phone = +79999999999;
  const date = new Date();

  const personInfo = {
    name: "Олег",
    lastName: "Башаров",
    phone: +8389678,
    mail: "mail@.ru",
  };
  const invalidPersonalInfo = {
    nickName: "nickName",
  };

  const getPersonInfo = (info: PersonInfo) => {
    if (!isValidPersonInfo(info)) {
      console.log("Некорректные персональные данные.");
      return;
    }
    console.log(info);
  };

  const getInfo = (data: PersonDataType): void => {
    if (typeof data === "string") {
      return console.log(`Моё имя ${name}`);
    }
    if (typeof data === "number") {
      return console.log(`Мой телефон ${phone}`);
    }
    if (data instanceof Date) {
      return console.log(`Сегодняшняя дата ${data}`);
    }
  };

  return (
    <>
      <button onClick={() => getInfo(name)}>Имя</button>
      <button onClick={() => getInfo(phone)}>телефон</button>
      <button onClick={() => getInfo(date)}>Дата</button>
      <button onClick={() => getPersonInfo(personInfo)}>Валидный объект</button>
      <button onClick={() => getPersonInfo(invalidPersonalInfo)}>
        Невалидный объект
      </button>
    </>
  );
};
