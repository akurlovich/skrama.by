import nodemailer from 'nodemailer';
import { IEmailMessage } from '../types/IEmailMessage';
import product_infoService from "../service/product_info-service";

export const emailNotification = async (data: IEmailMessage) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    // secure: SSL,
    auth: {
      user: 'skrama@tut.by', 
      pass: 'tavbsiawilgzwpju',
    },
  });

  interface IOrder {
    title: string,
    price: number,
    count: number,
    description: string,
  }

  interface InewInfo {
    title: string,
    description: string,
  }

  const order: IOrder[] = [];

  for (const item of data.items) {
    let newDesc = await product_infoService.getAllProductInfoByProductID(item.id);
    const newInfo: InewInfo[] = [];
    for (const info of newDesc) {
      let infoOne: InewInfo = {
        title: info.title,
        description: info.description,
      }
      newInfo.push(infoOne)
    }
    let newOrder: IOrder = {
      price: item.price,
      title: item.title,
      count: item.count,
      description: JSON.stringify(newInfo),
    };
    order.push(newOrder);
  }

  let message = {
    from: 'skrama@tut.by', // sender address
    to: "skrama-opt@tut.by", // list of receivers
    subject: `Заказ от ${data.name}`, // Subject line
    text: "Hello world?", // plain text body
    html: 
      `
      <p>Имя: ${data.name}</p>
      <p>Телефон: ${data.phone}</p>
      <p>Почта: ${data.email}</p>
      <h3>Товар:</h3> 
      <p>${order.map((item, id) => `${id + 1}. Цена: ${item.price}, количество: ${item.count}, описание: ${item.description}<br>`)}</р>
      `
      , // html body
  };

  // <p>${data.items.map((item, id) => `${id + 1}. Цена: ${item.price}, количество: ${item.count}, наименование: ${item.title}<br>`)}</р>

  transporter.sendMail(message, (err) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
    } else {
      return 'Email send!'
    }
  });
};
