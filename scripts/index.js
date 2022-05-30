// Add the coffee to local storage with key "coffee"

let products = JSON.parse(localStorage.getItem('product'))|| []


async function getData()
{
    let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
    
    let res = await fetch(url)
    let data = await res.json()
    
    // console.log(data.type)
    // console.log(data.menu.data)
    var product = data.menu.data

    // append(data.menu.data)
    
    
    
    
    
    


    // let h2 = document.createElement("h2")
    // h2.innerText=data.type

    product.forEach(function(data)

    {
        let menu = document.getElementById('menu')
        
        let div1=document.createElement('div')
        

        let img = document.createElement("img")
        img.id='coffeeImage'
        img.src = data.image
        
        
        let div2 = document.createElement('div')
        
        let title = document.createElement("h3")
        title.innerText=data.title
        
        
        // let desc = document.createElement("p")
        // desc.innerText=data.description
        
        
        let price = document.createElement('h4')
        price.innerText="Rs." +data.price
        
        let bucket = document.createElement("button")
        bucket.innerText="Add to Bucket"
        bucket.style.cursor="pointer"
        bucket.setAttribute= ("id","add_to_bucket")
        bucket.addEventListener('click', function(data)
        {
            myAddToBucket(data)
        })
        
       
        
        div1.append(img)
        div2.append(title, price,bucket)
        
        
        let div3 = document.createElement('div')
        div3.append(div1,div2)
        menu.append(div3)
        
    })
    localStorage.setItem('products', JSON.stringify(product
    
        ))
        
    }
    
    getData()


    let coffeeData = JSON.parse(localStorage.getItem('coffee'))||[]
     function myAddToBucket(data)
    {
    
    }
    
