import React, { useEffect, useState } from "react";
import "./App.css";
import UserService from "./service/UserService";
import { User } from "./model/user";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [usersModal, setUsersModal] = useState<User>();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [indice, setIndice] = useState<number>(0);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = (await UserService.getUsers()) as User[];
      setUsers(response);
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  const showCompany = (index: number) => {
    let empresa = 'Sem empresa';
    if (index % 3 === 0) empresa = 'TC';
    if (index % 5 === 0) empresa = 'SENCON';
    if (index % 3 === 0 && index % 5 === 0) empresa = 'TC / SENCON';

    return empresa;
  }

  return (
    <div className="container">
      <div className="table-users">
        <table id="table">
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço Completo</th>
            <th>Cidade</th>
            <th>Empresa</th>
          </tr>
          {users?.map((user, index) => {
            return (
              <tr onClick={() => { setIsOpen(true); setUsersModal(user); setIndice(index)}} key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address.city}</td>
                <td>{user.address.city}</td>
                <td>{showCompany(index)}</td>
              </tr>
            );
          })}
          {modalIsOpen && <Modal setIsOpen={setIsOpen} user={usersModal} indice={indice}/>}
        </table>
      </div>
    </div>
  );
}

export default App;
