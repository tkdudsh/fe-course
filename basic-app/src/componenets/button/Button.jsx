export default function Button({ type, name, w, h, bg }) {

  const handleClick=(e)=>{
    console.log(e.target)
  }

  return (
    <button
      type={type}
      name={name}
      style={{ width: w, height: h, backgroundColor: bg }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}