import React, {useState, useEffect} from 'react'


const TransactionsBySID = ({seller}) => {
    const sellerString = JSON.stringify(seller)
    return (
        <h1>{sellerString}</h1>
    );
}

export default TransactionsBySID;