import {useEffect} from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionTable(){
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data));
    },[]);

    return(
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Valor</th>
                            <th>Categoria</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td  >Desenvolvimento de webSite</td>
                            <td className="deposit">R$1200,00</td>
                            <td>Desenvolvimento</td>
                            <td>25/03/2022</td>
                        </tr>
                        <tr>
                            <td>aluguel</td>
                            <td className="withdraw">- R$1100,00</td>
                            <td>Casa</td>
                            <td>17/03/2022</td>
                        </tr>
                       
                    </tbody>    
                </table>
            </Container>
    );
}