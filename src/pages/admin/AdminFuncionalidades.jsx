
import {useEffect, useState} from 'react'
import "../../../styles/AdminFuncionalidades.css"
import axios from 'axios'
import Modal from "react-modal";
import CmsApi from "../../../api/CmsApi"



export default function AdminFuncionalidades() {


    const [visualizar, setVisualizar] = useState([])
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [endereco, setEndereco] = useState();


    //==============Modal para edição==============//
    Modal.setAppElement("#root");
    const [modalAberto, SetModalAberto] = useState(false);

    function openModal() {
    SetModalAberto(true);
    }

    function closeModal() {
    SetModalAberto(false);
    }
    
    //==============Método GET==============//
    useEffect(()=>{
        setTimeout(
            ()=> {
                fetch("http://localhost:3000/")
                  .then((data) => data.json())
                  .then((res) => {
                    const resultado = res;
                    setVisualizar(resultado);
                  });
            }, 1000)
    },[])

    //==============Método GET com ID ==============//

    async function getID(id) {
        try {
          const response = await axios.get(`http://localhost:3000/1`);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      }


    //==============Método POST==============//
    function cadastrarUsuario() {
        axios
          .post("http://localhost:3000/", {
            nome: nome,
            email: email,
            endereco: endereco
          })
          .then((res) => {
            console.log(res);
          });
      }
    

      //==============Método PUT==============//
      
      function editarUsuario(id) {
        const confirma = confirm("Confirmar edição de cliente?")
        
        if(confirma){
          axios.put(`http://localhost:3000/${id}`,{
              nome: nome,
              email: email,
              endereco: endereco
          });
          setVisualizar(visualizar.filter((teste) => teste.id === id))
        }
      }

    //==============Método DELETE==============//
      function deletarUsuario(id) {
        const confirma = confirm(
          `Confirmar exclusão de cliente?`
        );
        if (confirma) {
          axios.delete(`http://localhost:3000/${id}`);
          setVisualizar(visualizar.filter((teste) => teste.id !== id));
        }
      }
      
    return (
      //==============Formulário==============//

      <main id="AdmMain">
        <div id="wrapForm">
          <form id="formulario" onSubmit={cadastrarUsuario}>
            <div id="wrapInfos">
              <div className="wrapInfos">
                <h2>Cadastro de clientes</h2>
                <input
                  placeholder="Nome completo"
                  required
                  type="text"
                  name="nome"
                  id="nome"
                  onChange={(e) => setNome(e.target.value)}
                />

                <input
                  placeholder="E-mail"
                  required
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  placeholder="Endereço"
                  required
                  type="text"
                  name="endereco"
                  id="endereco"
                  onChange={(e) => setEndereco(e.target.value)}
                />

                <input id="btnEnviar" type="submit" value="Cadastrar" />
              </div>
            </div>
          </form>
        </div>

        {/* ============== Configurações do modal ============== */}
        <Modal
          id="modal"
          isOpen={modalAberto}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div>
            <h2>Mais informações sobre o plano</h2>
          </div>
          <div>
            {visualizar.map((item) => (
              <div id="resultadosModal" key={item.id}>
                <div>
                  <div>
                  <span>Nome:</span>{" "}
                  <input
                    required
                    type="text"
                    name="nome"
                    id="nome"
                    onChange={(e) => setNome(e.target.value)}
                    defaultValue={item.nome}
                  />
                  </div>
                  <div>
                  <span>E-mail:</span>{" "}
                  <input
                    required
                    type="text"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={item.email}
                  />
                  </div>
                  <div>
                  <span>Endereço:</span>{" "}
                  <input
                    required
                    type="text"
                    name="endereco"
                    id="endereco"
                    onChange={(e) => setEndereco(e.target.value)}
                    defaultValue={item.endereco}
                  />
                  </div>
                </div>
                <button onClick={() => editarUsuario(item.id)}>Editar</button>
              </div>
            ))}
          </div>
          <div id="wrapBtnFechar">
            <button id="btnFechar" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </Modal>

        {/* ============== div que recebe cadastros da API e mostra na tela principal ============== */}
        <div id="resultados">
          {
          visualizar.length === 0 ||
          visualizar.data === "Não há registros de pessoas." ? (
            <img
              src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
              alt=""
            />
          ) : (
            visualizar.map((item) => (
              <div id="resultados2" key={item.id}>
                <div>
                  <p><span>Nome:</span> {item.nome}</p>  <p><span>E-mail:</span> {item.email}</p>{" "}
                   <p><span>Endereço:</span> {item.endereco}</p> 
                </div>
                <div id="buttonResultados">
                  <input type="button" value="Editar" onClick={openModal} />
                  <input
                    type="button"
                    value="Excluir"
                    onClick={() => deletarUsuario(item.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    );
}
