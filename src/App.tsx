import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";



Modal.setAppElement('#root');
export function App() {

  const [isNewTransactionModalOpen,
    setIsNewTransactionModalOpen] = useState(false); 

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal(){
      setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenNewTransactionModal}/>
      <DashBoard/>
      <GlobalStyle/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />
    </TransactionsProvider>
  );
}
