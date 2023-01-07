import React, { useState } from 'react';
import Typography from '@mui/material/Typography';

export default function Rewards(props) {
  function RewardsCalculator(amount) {
    let points = 0; // Initialize points variable
    // If the transaction amount is greater than or equal to $100, add 2 points for every dollar spent over $100
    if (amount > 100) {
      points += 2 * (amount - 100) + 50;
    } else if (amount >= 50) {
      points += amount - 50;
    }

    return points
  }

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let threeMonthSum = 0;

  const totalPaymentsByMonth = props.historyData.reduce((totals, dataSet) => {
    const month = months[new Date(dataSet.Date).getMonth()];
    if (!totals[month]) {
      totals[month] = 0;
    }
    totals[month] += RewardsCalculator(dataSet.Payment);
    threeMonthSum = totals
    return totals;
  }, {});

  const customerNames = new Set();
  props.historyData.map((transaction) => {
    customerNames.add(transaction.Customer);
  });

  const RewardThree = Object.values(threeMonthSum).reduce((a, b) => a + b, 0)

  const monthsBreakdown = Object.entries(totalPaymentsByMonth).map(([key, value]) => (
    <Typography> {key} - Points: {value} </Typography>
  ));

  const pointsEarned = props.historyData.map(transaction => RewardsCalculator(transaction.Payment))
  console.log(pointsEarned);
  return (
    <>
      <h4>{customerNames}'s Rewards</h4>
      <div>
      <Typography style={{color:'#6C7A89', fontSize: '0.8em'}}>Transaction Breakdown</Typography>
      {props.historyData.map((transactions) => {
        return (
          <Typography style={{color:'#2C3E50'}}>
            Transaction Date:{transactions.Date} Points: {RewardsCalculator(transactions.Payment)}
          </Typography>
        )
      })}
      </div>

      <div style={{paddingTop:'30px'}}>
        <Typography style={{color:'#6C7A89', fontSize: '0.8em'}}>
          Month by Month: <Typography style={{color:'#2C3E50'}}>{monthsBreakdown}</Typography>
        </Typography>
      </div>

      <div style={{paddingTop:'30px'}}>
        <Typography style={{color:'#6C7A89', fontSize: '0.8em'}}>
          3 Month Total: <Typography style={{color:'#2C3E50'}}>Points: {RewardThree}</Typography>
        </Typography>
      </div>
    </>
  )

}








