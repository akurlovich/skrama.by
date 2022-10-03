import deviceModel from "../models/device-model"

class DeviceService {
  async addDevice(device: string) {
    return await deviceModel.create(device);
  };

  async getDevice(value: string) {
    return await deviceModel.findOne({value});
  };

  async getDeviceByID(id: string) {
    return await deviceModel.findById(id);
  };

  async getAllDevices() {
    return await deviceModel.find();
  };
    
};

export default new DeviceService();