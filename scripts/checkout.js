

let confirmButton = document.getElementById('confirm')
confirmButton.addEventListener('click', mycheckoutFunction)

let i;
function mycheckoutFunction()
{
    
   for(var i=0; i<12; i++)
   {
    if(i==0)
    {
        alert("Your order is accepted")
    }
    if(i==3)
    {
        alert('Your order is being Prepared')
    }
    if(i==3)
    {
        alert('Your order is being Packed')
    }
    if(i==3)
    {
        alert('Your order is out for Delivery')
    }
    if(i==3)
    {
        alert('Order Delivered')
    }
    else
    {
        continue
    }
    window.location.href='index.html'

   }

     
}