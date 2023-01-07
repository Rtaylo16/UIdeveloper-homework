import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function PaymentHistory(props) { 
    return (
        <>
         <h4 style={{color:"#1976d2",marginLeft:'15px',  marginBottom:'0px'}}>Transactions</h4>
        <List>
            {props.historyData.map((data) => {
                return (
                <ListItem>
                    <ListItemText
                        primary={data.Item}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Date: {data.Date.toLocaleString('default')}  Type: {data.Type} Charges: ${data.Payment.toFixed(2)}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                )

            })}
        </List>
        </>
    );
}