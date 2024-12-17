export const UnionAndIntersection = () => {
  type PersonDataType = number | string | Date;

  type Name = {
    name: string;
  };
  type Phone = {
    phone: number;
  };
  type Mail = {
    mail: string;
  };

  type PersonInfo = Name & Phone & Mail;

  const name = "Олег";
  const phone = +79999999999;
  const date = new Date();

  const personInfo = {
    name: "Олег",
    phone: +8389678,
    mail: "mail@.ru",
  };

  const getPersonInfo = (info: PersonInfo) => {
    console.log(
      `Меня зовут ${info.name}, мой телефон ${info.phone}, а так же моя почта ${info.mail}`,
    );
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
    </>
  );
};
