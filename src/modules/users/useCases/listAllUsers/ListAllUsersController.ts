import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { idUser } = request.body;
    const all = this.listAllUsersUseCase.execute(idUser);
    return response.json(all);
  }
}

export { ListAllUsersController };
