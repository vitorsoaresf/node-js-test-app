import { describe } from "@jest/globals";
import AuthService from "../../services/authService";

const authService = new AuthService();

describe("should be test authService.cadastarUsuario", () => {
  it("should be verify user need fields name, email and password", async () => {
    const userMock = {
      nome: "Rafael",
      email: "rafael@mail.com",
    };

    const saveUser = authService.cadastrarUsuario(userMock);
    await expect(saveUser).rejects.toThrowError(
      "Senha, nome e email dos usuários são obrigatórios"
    );
  });
});
