import Nav from './Nav';



const Wpix = () => {
  const src = "https://www.youtube.com/embed/DtxMfIzw9_w"

  return (
    <div className="">
        <br /> <br />
        <iframe
        style={{
          width: '450px',
          height: '250px',
          border: 'solid 1px white',
          borderRadius: '20px',
        }}
        src={src}
        title="Youtube Player"
        allowFullScreen
        autoPlay
      />
    </div>
  );
}

export default Wpix;
