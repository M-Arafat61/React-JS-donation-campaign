const BackgroundImage = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/public/donation_bg.jpg")`,
        height: "100vh",
        backgroundSize: "fill",
        opacity: "0.2",
      }}
    ></div>
  );
};

export default BackgroundImage;
