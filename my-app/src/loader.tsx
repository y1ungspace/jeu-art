import { SearchPannelType, Template } from "./interfaces";


export function ProductList(props: SearchPannelType) {

  const arr = props.arr

  // const mark = document.createElement('div');
  // if (test.isInCart === true) {
  //   mark.classList.add('product_added');
  //   mark.textContent = 'In Cart';
  //   img.append(mark);
  // }
  
//  }

 if (arr.length === 0) {
  return <p>Sorry, there are no products under your filters</p>
 } else {

 } return( 
    <>
     {arr.map((card: Template) => (
      <Card name={card.name} cost={card.cost} image={card.image} key={card.name}/>
     ))}
    </>)
}

function Card(props: Template) {
  return(
    <div className="product-card">
      <div className="product-card_img" style={{backgroundImage: `url(${props.image})`}}>
        <div className="product-card_add">
          <p className="pruduct_add_text">ADD TO CART</p>
        </div>
        <div className="product_added">In Cart</div>
      </div>
      <div className="product_inf">
        <h3 className="h3 product_name">{props.name}</h3>
        <h4 className="h4">{props.cost}</h4>
      </div>
    </div>
  )
}




  let arrChecked: string[] = []
  const arrOfInputs = document.querySelectorAll('.checkbox');

  if (localStorage.getItem("saveChecked") !== null) {
    arrChecked = JSON.parse(localStorage.saveChecked);
    console.log(arrOfInputs)
  }

  arrOfInputs.forEach(e => {
   for (let i = 0; i < arrChecked.length; i++) {
    if (e.id === arrChecked[i]) {
      (e as HTMLInputElement).checked = true;
    }
   }
  })


