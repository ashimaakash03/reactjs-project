const Message = () => {
    const handleClick= ()=>{
        alert("Button was clicked...")
    }
  return (
    <div>
      <button onClick={handleClick}>Click Here to get a message...</button>
    </div>
  );
};

export default Message;
