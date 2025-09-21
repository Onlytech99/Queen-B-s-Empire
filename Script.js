let productsData = [
  { name:"Curly Waves", price:50, type:"Curls", img:"https://via.placeholder.com/200" },
  { name:"Sleek Bob", price:45, type:"Bob", img:"https://via.placeholder.com/200" },
  { name:"Braided Style", price:60, type:"Braids", img:"https://via.placeholder.com/200" },
  { name:"Loose Curls", price:55, type:"Curls", img:"https://via.placeholder.com/200" },
  { name:"Classic Bob", price:50, type:"Bob", img:"https://via.placeholder.com/200" },
  { name:"Box Braids", price:70, type:"Braids", img:"https://via.placeholder.com/200" }
];

let cart = [];

function displayProducts(products){
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach(p=>{
    const div = document.createElement('div'); div.className='product';
    div.innerHTML=`<img src="${p.img}" alt="${p.name}"><h3>${p.name}</h3><p>$${p.price}</p>
    <button onclick="addToCart('${p.name}',${p.price})">Add to Cart</button>`;
    productsDiv.appendChild(div);
  });
}

function filterProducts(type){ if(type==='all') displayProducts(productsData); else displayProducts(productsData.filter(p=>p.type===type)); }

function addToCart(name,price){ cart.push({name,price}); updateCart(); }

function updateCart(){
  const items=document.getElementById('cart-items');
  const count=document.getElementById('cart-count');
  const totalEl=document.getElementById('cart-total');
  items.innerHTML=''; let total=0;
  cart.forEach((item,i)=>{
    total+=item.price;
    const div=document.createElement('div'); div.textContent=`${item.name} - $${item.price}`;
    const remove=document.createElement('button'); remove.textContent='Remove';
    remove.onclick=()=>{ cart.splice(i,1); updateCart(); };
    div.appendChild(remove); items.appendChild(div);
  });
  count.textContent=cart.length; totalEl.textContent=`Total: $${total}`;
}

const cartModal=document.getElementById('cart-modal');
document.getElementById('cart-btn').onclick=()=>cartModal.style.display='block';
document.getElementById('close-cart').onclick=()=>cartModal.style.display='none';
window.onclick=(e)=>{if(e.target===cartModal)cartModal.style.display='none';};

function checkout(){ if(cart.length===0) alert('Your cart is empty!'); else { alert(`Thank you for your order of ${cart.length} item(s)!`); cart=[]; updateCart(); cartModal.style.display='none'; } }

function submitForm(e){ e.preventDefault(); alert('Message sent! We will get back to you soon.'); document.getElementById('contact-form').reset(); }

displayProducts(productsData);