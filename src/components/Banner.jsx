import "../styles/Banner.scss";

export default function Banner({ bannerImg, bannerText, alt }) {
  return (
    <div className="main__banner">
      <img src={bannerImg} alt={alt} />
      <div className="main__banner--overlay" />
      <h1 className="main__banner--text">{bannerText}</h1>
    </div>
  );
}
