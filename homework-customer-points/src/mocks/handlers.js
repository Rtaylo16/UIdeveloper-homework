import { rest } from "msw";
export const handlers = [
 rest.get("/api/get-transaction-history", (req, res, ctx) => {
  const customer = req.url.searchParams.get('customer') ;
if(customer === 'John'){
   return res(
     ctx.status(200),
     ctx.json([
       { Customer: 'John', Date: "1/3/2023", Type: "Payment - Visa", Item: "Rasberry Pi 2pcs Fan", Payment: 120.00 },
       { Customer: 'John', Date: "1/20/2023", Type: "Payment - Visa", Item: "Kenmore DU4080", Payment:90.00 },
       { Customer: 'John', Date: "1/25/2023", Type: "Payment - Visa", Item: "Kodak Step Mobile Printer", Payment:165.00 },
       { Customer: 'John', Date: "1/26/2023", Type: "Payment - Visa", Item: "Heng Balance Light", Payment:300.00 },
       { Customer: 'John', Date: "2/13/2023", Type: "Payment - Visa", Item: "Travel Tote", Payment: 100.00 },
       { Customer: 'John', Date: "2/19/2023", Type: "Payment - Visa", Item: "Phillips Water Store", Payment:189.00 },
       { Customer: 'John', Date: "3/6/2023", Type: "Payment - Visa", Item: "Govee Light bar", Payment: 160.00 },
       { Customer: 'John', Date: "3/19/2023", Type: "Payment - Visa", Item: "L shaped Desk", Payment:290.00 },
       { Customer: 'John', Date: "3/24/2023", Type: "Payment - Visa", Item: "Xp-Pen 1st Generation", Payment:245.00 },
       { Customer: 'John', Date: "3/25/2023", Type: "Payment - Visa", Item: "Cosmo Air Fryer", Payment:150.00 },
     ])
   );
}
   
  else if (customer === "Jayda"){
    return res(
      ctx.status(200),
      ctx.json([
        { Customer: 'Jayda', Date: "1/3/2023", Type: "Payment - Visa", Item: "Laptop", Payment: 1200.00 },
        { Customer: 'Jayda', Date: "1/10/2023", Type: "Payment - Mastercard", Item: "Desktop", Payment: 890.00 },
        { Customer: 'Jayda', Date: "1/20/2023", Type: "Payment - Visa", Item: "Monitor", Payment: 280.00 },
        { Customer: 'Jayda', Date: "2/3/2023", Type: "Payment - Mastercard", Item: "Smartphone", Payment: 650.00 },
        { Customer: 'Jayda', Date: "2/15/2023", Type: "Payment - Visa", Item: "Tablet", Payment: 400.00 },
        { Customer: 'Jayda', Date: "3/5/2023", Type: "Payment - Mastercard", Item: "Smartwatch", Payment: 300.00 },
        { Customer: 'Jayda', Date: "3/20/2023", Type: "Payment - Visa", Item: "Headphones", Payment: 150.00 }
      ])
    );
  }
else if(customer === "Bill"){
      return res(
        ctx.status(200),
        ctx.json([
          { Customer: 'Bill', Date: "1/5/2023", Type: "Payment - Visa", Item: "Furniture", Payment: 2500.00 },
          { Customer: 'Bill', Date: "1/12/2023", Type: "Payment - Mastercard", Item: "Decor", Payment: 1200.00 },
          { Customer: 'Bill', Date: "1/25/2023", Type: "Payment - Visa", Item: "Appliances", Payment: 3200.00 },
          { Customer: 'Bill', Date: "2/7/2023", Type: "Payment - Mastercard", Item: "Kitchen gadgets", Payment: 780.00 },
          { Customer: 'Bill', Date: "2/17/2023", Type: "Payment - Visa", Item: "Outdoor equipment", Payment: 980.00 },
          { Customer: 'Bill', Date: "3/3/2023", Type: "Payment - Mastercard", Item: "Tools", Payment: 2200.00 },
          { Customer: 'Bill', Date: "3/15/2023", Type: "Payment - Visa", Item: "Lawn and garden", Payment: 1500.00 }
        ])
      );
}
     
 }),

];