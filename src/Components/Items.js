import {useState} from 'react';
import "./Items.css";
import About from './About'
import { Link } from 'react-router-dom';
export const addTocartArray = [];
export let ProductItems = [{
    id:1,
    src:"https://www.bigbasket.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg",
    alt:"Taaza  Homogenised Toned Milk Error",
    name:"Taaza Homogenised Toned Milk",
    category:"dairy",
    price:125,
    count:1,
    total:125,
    describe:"Amul Taaza Homogenized Toned Milk is fully wholesome and entirely luscious. It has a low-fat, low-carb, low-calorie and standard protein content. It continues fresh for 2 days after opening if kept in refrigerator. No water or powder added, no preservative / chemical, easy to carry and use on traveling. It does not have germs as it is pasteurized and therefore hygienic."
},{
    id:2,
    src:"https://www.bigbasket.com/media/uploads/p/l/40069116-2_3-amul-unsalted-butter.jpg",
    alt:"Butter - Unsalted",
    name:"Butter - Unsalted",
    category:"dairy",
    price:110,
    count:1,
    total:110,
    describe:"Butter in its purest form, made of cream with no added salt. Goes perfectly with every dish. A healthy source of saturated fats which delivers many minerals, vitamins and nutrients to the body."
},{
    id:3,
    src:"https://www.bigbasket.com/media/uploads/p/l/100285703_15-nandini-goodlife-toned-milk.jpg",
    alt:"GoodLife UHT Treated Toned Milkr",
    name:"GoodLife Toned Milk",
    category:"dairy",
    price:150,
    count:1,
    total:150,
    describe:"Goodlife Cow milk is UHT processed milk with Min. 3. % fat and Min. 8.5% SNF. Suitable for all generation."
},{
    id:4,
    src:"https://www.bigbasket.com/media/uploads/p/xxl/1200164_3-milky-mist-paneer-premium-fresh.jpg",
    alt:"Paneer - Premium Fresh",
    name:"Paneer - Premium Fresh",
    category:"dairy",
    price:150,
    count:1,
    total:150,
    describe:"Paneer is made of milk, making it a protein rich food, along with high levels of calcium and phosphorus. So including paneer in the diet regularly can strengthen your bones and teeth due to its calcium content. Wash paneer with fresh cold water before cooking."
},{
    id:5,
    src:"https://www.bigbasket.com/media/uploads/p/xxl/180584_8-amul-masti-buttermilk-spice.jpg",
    alt:"Masti Buttermilk - Spice",
    name:"Masti Buttermilk - Spice",
    category:"dairy",
    price:200,
    count:1,
    total:200,
    describe:"Amul Masti Spice Buttermilk is a natural milk-based drink which will refresh you immediately on a hot summer afternoon. The slightly sour liquid spiced up with various Indian spices is a healthy alternative to sodas and cold drinks during summers."
},{
    id:6,
    src:"https://www.bigbasket.com/media/uploads/p/xxl/104808-2_5-amul-cheese-slices.jpg",
    alt:"Cheese Slices - Rich In Protein, Wholesome, No Added Sugar",
    name:"Cheese Slices ",
    category:"dairy",
    price:134,
    count:1,
    total:134,
    describe:"Amul Cheese can enhance the taste of any dish, whether you consume it whole or melt it in your food. Amul Cheese Processed Cheese Spread is made from high-quality ingredients and is prepared using graded cow/buffalo milk and microbial rennet. It can be used in hundreds of ways in any dish."
},{
    id:7,
    src:"https://www.bigbasket.com/media/uploads/p/l/40003162_5-milky-mist-curd-farm-fresh.jpg",
    alt:"Curd/Dahi - No Preservatives Added",
    name:"Curd/Dahi ",
    category:"dairy",
    price:38,
    count:1,
    total:38,
    describe:"Curd, also mosaru or dahi or Thayir or Perugu, is a traditional yogurt or fermented milk product, originating from and popular throughout the Indian subcontinent. It is usually prepared from cow's milk, and sometimes buffalo milk or goat milk."
},{
    id:8,
    src:"https://www.jiomart.com/images/product/original/491249385/amul-lactose-free-milk-250-ml-tetra-pak-product-images-o491249385-p590041242-0-202203170353.jpg?im=Resize=(1000,1000)",
    alt:"Lactose Free Milk",
    name:"Lactose Free Milk",
    category:"dairy",
    price:40,
    count:1,
    total:40,
    describe:"What Is Lactose-Free Milk? Lactose-free milk is a commercial milk product that is free of lactose. Lactose is a type of sugar found in milk products that can be difficult for some people to digest (1). Food manufacturers produce lactose-free milk by adding lactase to regular cow's milk."
},{
    id:9,
    src:"https://www.bigbasket.com/media/uploads/p/l/40189284_2-mother-dairy-ultimate-paneer-fresh-high-protein.jpg",
    alt:"Ultimate Malai Paneer - Fresh, High Protein",
    name:"Ultimate Malai Paneer ",
    category:"dairy",
    price:88,
    count:1,
    total:88,
    describe:"Mother Dairy Malai paneer is made from 100% cow's milk and serves as a rich source of protein and calcium. Paneer is also known as cottage cheese and is used to prepare a variety of Indian appetisers and main course dishes including salads, tikkies, and gravies."
},{
    id:10,
    src:"https://www.bigbasket.com/media/uploads/p/xxl/40296405_2-lavian-exotique-marvella-layered-strawberry-cake-rich-taste-perfect-treat.jpg",
    alt:"Marvella Strawberry Cake",
    name:"Marvella Strawberry Cake ",
    category:"bakery",
    price:225,
    count:1,
    total:225,
    describe:"Satisfy your sweet tooth with the Lavian Exotique Marvella Strawberry Cake. Made with a luscious layer of strawberry-flavoured filling and airy, light sponge cake, this bar cake is sure to leave you craving for more. Enjoy the perfection in every slice and treat yourself to this delectable dessert."
},{
    id:11,
    src:"https://www.bigbasket.com/media/uploads/p/l/40296404_2-lavian-exotique-marvella-layered-chocolate-cake-perfect-sweet-treat.jpg",
    alt:"Marvella - Layered Chocolate Cake, Perfect Sweet Treat",
    name:"Marvella Chocolate Cake",
    category:"bakery",
    price:225,
    count:1,
    total:225,
    describe:"Satisfy your sweet tooth with the Lavian Exotique Marvella Strawberry Cake. Made with a luscious layer of chocolate-flavoured filling and airy, light sponge cake, this bar cake is sure to leave you craving for more. Enjoy the perfection in every slice and treat yourself to this delectable dessert."
},{
    id:12,
    src:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/r/f/b/0-15-black-currant-cookies-150g-pack-of-1-1-cookieman-original-imagjfurbrquye6b.jpeg?q=90&crop=false",
    alt:"Black Currant Cookies",
    name:"Black Currant Cookies",
    category:"bakery",
    price:199,
    count:1,
    total:199,
    describe:"The cookies are made with black currants, and they are dark, fruity, and intensely sweet."
},{
    id:13,
    src:"https://www.cookiemanindia.com/cdn/shop/products/buttercashewlifestyle_1024x1024.jpg?v=1689246780",
    alt:"Butter Cashew Cookies",
    name:"Butter Cashew Cookies",
    category:"bakery",
    price:200,
    count:1,
    total:200,
    describe:"Made with premium quality butter and loaded with crunchy cashews, these cookies not only satisfy your sweet tooth but also provide a good source of protein. Indulge in the melt-in-your-mouth richness and enjoy the delightful combination of flavors and textures."
},{
    id:14,
    src:"https://m.media-amazon.com/images/I/61dJX1LGAxL._AC_UF1000,1000_QL80_.jpg",
    alt:"Ginger Oats Cookies",
    name:"Ginger Oats Cookies",
    category:"bakery",
    price:300,
    count:1,
    total:300,
    describe:"ginger biscuits may help regulate glucose levels and hence is recommended for diabetes. Ginger biscuits also have anti-inflammatory effects, thereby are important for problems like rheumatoid arthritis, bursitis, ulcerative colitis and bursitis"
},{
    id:15,
    src:"https://www.bigbasket.com/media/uploads/p/l/40167043_9-britannia-treat-croissant-cocoa-creme-roll-100-veg.jpg",
    alt:"Treat Croissant Cocoa Filling",
    name:"Treat Croissant Cocoa Filling",
    category:"bakery",
    price:300,
    count:1,
    total:300,
    describe:"Every bite of the delicious treat gives the heavenly taste of smooth, velvety crème made with Cocoa, oozing out of layers of soft, fluffy bread that will melt in your mouth, creating an irresistible experience. It is a unique twist on your everyday snack, perfect to curb mid-day cravings or midnight hunger pangs."
}]

export default function Items() {
const[checked,setChecked]=useState(ProductItems);

//ifChecked to display Dairy Products
const handleChangeDairy = ((event)=>{
    if(event.target.checked){
        let dairy=ProductItems.filter((e)=>e.category=='dairy');
        setChecked(dairy);
}
else
{
     setChecked(ProductItems);
}

});

//ifChecked to display Bakery Products
const handleChangeBakery=((event)=>{
    if(event.target.checked){
        let bakery = ProductItems.filter((e)=>e.category=="bakery");
        setChecked(bakery)
    }
    else{
        setChecked(ProductItems);
    }

})


const addToCart = ((i)=>{
if(!(addTocartArray.includes(i))){
   addTocartArray.push(i);
   console.log(addTocartArray);
}


})



  return (
<>
    <div className="Items-Container">
      <div className="Items-Category">
        <p className='Category-Name'>Category</p>
        <div className='Checkboxs'>
        <input type='checkbox' id='checkbox1' onChange={handleChangeDairy}></input><label className='Checkbox'>Dairy</label><br />
        <input type='checkbox' id='checkbox2' onChange={handleChangeBakery}></input><label className='Checkbox'>Bakery</label>
        </div>
        
      </div>

      <div className="Items-ListofProducts">
        {checked.map((items)=>{
         return (
        <div className="Items-Products">
         <Link to={`/Find/${items.id}`} style={{
            textDecoration:"none",
            color:"black"
         }}>
          <img
            src={items.src}
            alt={items.alt}
            className="Product-Image"
          ></img>
          <p className="Product-Name">
           {items.name}
          </p>
        </Link>   
          <p className="Product-Category-Name">Category:{items.category}</p>
          <p className="Product-Price">Price:{items.price}</p>
          <hr></hr>
          <button className="Product-Button" onClick={()=>addToCart(items)}>Add to Cart</button>
        </div>
         )
        })}
        
      </div>
      
    </div>
 
    <About />
    
</>
  );
 

}




// import {useState} from 'react';
// import "./Items.css";
// import About from './About'
// import { Link } from 'react-router-dom';
// export const addTocartArray = [];
// export let ProductItems = [{
//     id:1,
//     src:"https://www.bigbasket.com/media/uploads/p/l/306926_4-amul-homogenised-toned-milk.jpg",
//     alt:"Taaza  Homogenised Toned MilkError",
//     name:"Taaza Homogenised Toned Milk",
//     category:"dairy",
//     price:125,
//     count:1,
//     total:125
// },{
//     id:2,
//     src:"https://www.bigbasket.com/media/uploads/p/l/40069116-2_3-amul-unsalted-butter.jpg",
//     alt:"Butter - Unsalted",
//     name:"Butter - Unsalted",
//     category:"dairy",
//     price:110,
//     count:1,
//     total:110
// },{
//     id:3,
//     src:"https://www.bigbasket.com/media/uploads/p/l/100285703_15-nandini-goodlife-toned-milk.jpg",
//     alt:"GoodLife UHT Treated Toned Milkr",
//     name:"GoodLife Toned Milk",
//     category:"dairy",
//     price:150,
//     count:1,
//     total:150
// },{
//     id:4,
//     src:"https://www.bigbasket.com/media/uploads/p/xxl/1200164_3-milky-mist-paneer-premium-fresh.jpg",
//     alt:"Paneer - Premium Fresh",
//     name:"Paneer - Premium Fresh",
//     category:"dairy",
//     price:150,
//     count:1,
//     total:150
// },{
//     id:5,
//     src:"https://www.bigbasket.com/media/uploads/p/xxl/180584_8-amul-masti-buttermilk-spice.jpg",
//     alt:"Masti Buttermilk - Spice",
//     name:"Masti Buttermilk - Spice",
//     category:"dairy",
//     price:200,
//     count:1,
//     total:200
// },{
//     id:6,
//     src:"https://www.bigbasket.com/media/uploads/p/xxl/104808-2_5-amul-cheese-slices.jpg",
//     alt:"Cheese Slices - Rich In Protein, Wholesome, No Added Sugar",
//     name:"Cheese Slices ",
//     category:"dairy",
//     price:134,
//     count:1,
//     total:134
// },{
//     id:7,
//     src:"https://www.bigbasket.com/media/uploads/p/l/40003162_5-milky-mist-curd-farm-fresh.jpg",
//     alt:"Curd/Dahi - No Preservatives Added",
//     name:"Curd/Dahi ",
//     category:"dairy",
//     price:38,
//     count:1,
//     total:38
// },{
//     id:8,
//     src:"https://www.jiomart.com/images/product/original/491249385/amul-lactose-free-milk-250-ml-tetra-pak-product-images-o491249385-p590041242-0-202203170353.jpg?im=Resize=(1000,1000)",
//     alt:"Lactose Free Milk",
//     name:"Lactose Free Milk",
//     category:"dairy",
//     price:40,
//     count:1,
//     total:40
// },{
//     id:9,
//     src:"https://www.bigbasket.com/media/uploads/p/l/40189284_2-mother-dairy-ultimate-paneer-fresh-high-protein.jpg",
//     alt:"Ultimate Malai Paneer - Fresh, High Protein",
//     name:"Ultimate Malai Paneer ",
//     category:"dairy",
//     price:88,
//     count:1,
//     total:88
// },{
//     id:10,
//     src:"https://www.bigbasket.com/media/uploads/p/xxl/40296405_2-lavian-exotique-marvella-layered-strawberry-cake-rich-taste-perfect-treat.jpg",
//     alt:"Marvella Strawberry Cake",
//     name:"Marvella Strawberry Cake ",
//     category:"bakery",
//     price:225,
//     count:1,
//     total:225
// },{
//     id:11,
//     src:"https://www.bigbasket.com/media/uploads/p/l/40296404_2-lavian-exotique-marvella-layered-chocolate-cake-perfect-sweet-treat.jpg",
//     alt:"Marvella - Layered Chocolate Cake, Perfect Sweet Treat",
//     name:"Marvella Chocolate Cake",
//     category:"bakery",
//     price:225,
//     count:1,
//     total:225
// },{
//     id:12,
//     src:"https://rukminim2.flixcart.com/image/850/1000/xif0q/cookie-biscuit/r/f/b/0-15-black-currant-cookies-150g-pack-of-1-1-cookieman-original-imagjfurbrquye6b.jpeg?q=90&crop=false",
//     alt:"Black Currant Cookies",
//     name:"Black Currant Cookies",
//     category:"bakery",
//     price:199,
//     count:1,
//     total:199
// },{
//     id:13,
//     src:"https://www.cookiemanindia.com/cdn/shop/products/buttercashewlifestyle_1024x1024.jpg?v=1689246780",
//     alt:"Butter Cashew Cookies",
//     name:"Butter Cashew Cookies",
//     category:"bakery",
//     price:200,
//     count:1,
//     total:200
// },{
//     id:14,
//     src:"https://m.media-amazon.com/images/I/61dJX1LGAxL._AC_UF1000,1000_QL80_.jpg",
//     alt:"Ginger Oats Cookies",
//     name:"Ginger Oats Cookies",
//     category:"bakery",
//     price:300,
//     count:1,
//     total:300
// },{
//     id:15,
//     src:"https://www.bigbasket.com/media/uploads/p/l/40167043_9-britannia-treat-croissant-cocoa-creme-roll-100-veg.jpg",
//     alt:"Treat Croissant Cocoa Filling",
//     name:"Treat Croissant Cocoa Filling",
//     category:"bakery",
//     price:300,
//     count:1,
//     total:300
// }]

// export default function Items() {
// const[checked,setChecked]=useState(ProductItems);

// //ifChecked to display Dairy Products
// const handleChangeDairy = ((event)=>{
//     if(event.target.checked){
//         let dairy=ProductItems.filter((e)=>e.category=='dairy');
//         setChecked(dairy);
// }
// else
// {
//      setChecked(ProductItems);
// }

// });

// //ifChecked to display Bakery Products
// const handleChangeBakery=((event)=>{
//     if(event.target.checked){
//         let bakery = ProductItems.filter((e)=>e.category=="bakery");
//         setChecked(bakery)
//     }
//     else{
//         setChecked(ProductItems);
//     }

// })


// const addToCart = ((i)=>{
// if(!(addTocartArray.includes(i))){
//    addTocartArray.push(i);
// }

// })



//   return (
// <>
//     <div className="Items-Container">
//       <div className="Items-Category">
//         <p className='Category-Name'>Category</p>
//         <div className='Checkboxs'>
//         <input type='checkbox' id='checkbox1' onChange={handleChangeDairy}></input><label className='Checkbox'>Dairy</label><br />
//         <input type='checkbox' id='checkbox2' onChange={handleChangeBakery}></input><label className='Checkbox'>Bakery</label>
//         </div>
        
//       </div>

//       <div className="Items-ListofProducts">
//         {checked.map((items)=>{
//          return (
//         <div className="Items-Products">
//          <Link to={`/Find/${items.id }`} style={{
//             textDecoration:"none",
//             color:"black"
//          }}>
//           <img
//             src={items.src}
//             alt={items.alt}
//             className="Product-Image"
//           ></img>
//           <p className="Product-Name">
//            {items.name}
//           </p>
//         </Link>   
//           <p className="Product-Category-Name">Category:{items.category}</p>
//           <p className="Product-Price">Price:{items.price}</p>
//           <hr></hr>
//           <button className="Product-Button" onClick={()=>addToCart(items.id)}>Add to Cart</button>
//         </div>
//          )
//         })}
        
//       </div>
      
//     </div>
 
//     <About />
    
// </>
//   );
 

// }
