import {createContext, useEffect, useState,ReactNode} from 'react';
import { api } from './services/api';

export const TransactionsContext = createContext<TransactionsContextData>({}as TransactionsContextData);

interface Transaction{
    id:number;
    title:string;
    amount:number;
    category:string;
    type:string;
    createAt:string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface TransactionProviderProps{
    children:ReactNode;
}
interface TransactionsContextData{
    transactions:Transaction[],
    createTransaction: (transaction:TransactionInput) => Promise<void>;
}
export function TransactionsProvider({children}: TransactionProviderProps ){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions));

    },[]);

    async function createTransaction(transactionInput:TransactionInput){
        if (transactionInput.category != '' && transactionInput.title != '') {
            const response = await api.post('/transactions',{
                ...transactionInput,
                createAt: new Date()});
            const {transaction} = response.data;
            setTransactions([
                ...transactions,
                transaction,
            ]);
        };
};
    

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
        );
}    