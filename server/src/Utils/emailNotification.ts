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

  interface INewInfo {
    [key: string]: string,
  }

  const order: IOrder[] = [];
  let totalPrice = 0;

  for (const item of data.items) {
    totalPrice += item.price * item.count;
    let newDesc = await product_infoService.getAllProductInfoByProductID(item.id);

    const newInfo: INewInfo[] = [];
    
    for (const info of newDesc) {
      let infoOne: INewInfo = {
        [info.title]: info.description,
        
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
    from: 'skrama@tut.by', 
    to: "skrama@tut.by", 
    subject: `Заказ от ${data.name} на сумму ${totalPrice}`, 
    text: "", 
    html: 
      `
      <p>Имя: ${data.name}</p>
      <p>Телефон: ${data.phone}</p>
      <p>Почта: ${data.email}</p>
      <p>Адрес доставки: ${data.address}</p>
      <h4>Товар:</h4> 
      <p>${order.map((item, id) => `${id + 1}. Цена: ${item.price}, количество: ${item.count}, описание: ${item.description}<br>`)}</р>
      <h3>Сумма заказа: ${totalPrice}</h3> 
      `
      , 
  };

  transporter.sendMail(message, (err) => {
    if (err) {
        console.log('Error occurred. ' + err.message);
        return process.exit(1);
    } else {
      return 'Email send!'
    }
  });
};
