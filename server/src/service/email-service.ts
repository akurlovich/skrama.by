import { IEmailMessage } from "../types/IEmailMessage";
import { emailNotification } from "../Utils/emailNotification";

class EmailService {
  async sendEmail(data: IEmailMessage) {
    return await emailNotification(data);
  };  
};

export default new EmailService();