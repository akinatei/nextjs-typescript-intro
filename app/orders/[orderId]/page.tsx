
export default function Orders({ params }: { params: { orderId: string } })
{
   return <div>My orders: {params.orderId}</div>
 }