import React, { useEffect, useState } from "react";
import Divider from '@mui/material/Divider';
import PaymentHistory from '../components/order-history';
import useMediaQuery from '@mui/material/useMediaQuery';
import Rewards from '../components/customer-rewards'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
      fontFamily: '"Oswald", "Helvetica", "Arial", sans-serif',
    },
  });


export default function MainPage() {
    const smallScreen = useMediaQuery('(max-width:600px)');
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('/api/get-transaction-history?customer=John');
            const json = await response.json();
            setHistoryData(json);
     
        })();
    }, []);

     const handleJohnData = () => {
      (async () => {
        const response = await fetch('/api/get-transaction-history?customer=John');
        const json = await response.json();
        setHistoryData(json);
      })();
    };

    const handleJaydaData = () => {
      (async () => {
        const response = await fetch('/api/get-transaction-history?customer=Jayda');
        const json = await response.json();
        setHistoryData(json);
      })();
    };

    const handleBillData = () => {
      (async () => {
        const response = await fetch('/api/get-transaction-history?customer=Bill');
        const json = await response.json();
        setHistoryData(json);
      })();
    };


    return (
        <div>
             <ThemeProvider theme={theme}>
            <Drawer anchor='left' style={{ width: '400px', }} variant='permanent' paper='linear-gradient(180deg, #b2e6f5 0%, #b2e6f5 70%, #d5f5f5 100%)'>
                <MenuList style={{ width: '200px', paddingTop: '20px', }} >
                    <ListSubheader  color='primary' style={{ fontSize: '1.5rem' }} >Customers</ListSubheader>
                    <MenuItem onClick={handleJohnData}>John</MenuItem>
                    <MenuItem onClick={handleJaydaData}>Jayda</MenuItem>
                    <MenuItem onClick={handleBillData}>Bill</MenuItem>
                </MenuList>
            </Drawer>
            <div style={{ marginLeft: smallScreen ? '0' : '200px', padding: '10px' }}>
                <h2>Payment History</h2>
                <Divider />

                <div style={{ display: 'flex', flexDirection: smallScreen ? 'column' : 'row' }}>
                    <div style={{ flex: 1 }}>
                        <PaymentHistory historyData={historyData} />
                    </div>
                    <div style={{
                        height:'800px', width: '300px', borderLeft: '1px solid #ddd', paddingLeft: '20px', 
                    }}>
                        <Rewards historyData={historyData} />
                    </div>
                </div>
            </div>
            </ThemeProvider>
        </div>
    );
}