const Message = () => {
  const handleClick = () => {
    console.log("Button was clicked...");
  };
  return (
    <div>
      <button onClick={handleClick}>Click Here to get a message...</button>
    </div>
  );
};

export default Message;
