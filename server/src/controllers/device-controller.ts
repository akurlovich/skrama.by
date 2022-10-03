import { NextFunction, Request, Response } from "express";
import deviceService from "../service/device-service";

class DeviceController {
  async addDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const newDevice = await deviceService.addDevice(req.body);
      return res.json(newDevice);
    } catch (error) {
      next(error);
    }
  };

  async getDevice(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const device = await deviceService.getDevice(value);
      return res.json(device);
    } catch (error) {
      next(error);
    }
  };

  async getDeviceByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const device = await deviceService.getDeviceByID(req.params.id);
      return res.json(device);
    } catch (error) {
      next(error);
    }
  };

  async getAllDevices(req: Request, res: Response, next: NextFunction) {
    try {
      const devices = await deviceService.getAllDevices();
      return res.json(devices);
    } catch (error) {
      next(error);
    }
  };
};

export default new DeviceController;