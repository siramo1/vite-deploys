import './pages.css';
import myPhoto from "../assets/myPhoto.jpg";

function Portofolio() {
  return (
    <div>
      <main className='portofolio-page'>
        <h1>Portofolio</h1>
        <img src={myPhoto} />
      </main>
    </div>
  )
}

export default Portofolio
