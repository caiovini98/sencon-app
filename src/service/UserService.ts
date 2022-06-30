import API from "./api/api";

class UserService {
  public async getUsers(): Promise<any> {
    try {
      const res = await API.get(`/users`);

      return res.data;
    } catch (error: any) {
      console.log(error);
    }
  }
}

export default new UserService();
