import React from "react";

export default function Card() {
  // const cardDesc = document.querySelector(".card--desc");
  // console.log(cardDesc);
  // const handleClick = () => cardDesc.removeAttribute("display");
  constructor(props);
  {
    super(props);
    this.inputRef = React.createRef();
  }

  const handleClick = () => this.cardDesc.current.removeAttribute("display");

  return (
    <div className="card">
      <img
        className="card--img"
        src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
        alt="Coffee"
      />
      <button className="card--btn" onClick={handleClick}>
        Coffee
      </button>
      <div className="card--desc" ref={cardDesc}>
        Coffee is a drink prepared from roasted coffee beans. Darkly colored,
        bitter, and slightly acidic, coffee has a stimulating effect on humans,
        primarily due to its caffeine content. It is the most popular hot drink
        in the world. Seeds of the Coffea plant's fruits are separated to
        produce unroasted green coffee beans
      </div>
    </div>
  );
}
