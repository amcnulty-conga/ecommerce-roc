import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  return (
    <div className='Home' style={{
      backgroundImage: `url(https://picsum.photos/1920/1080)`,
      backgroundAttachment: 'fixed'
    }}>
      <div className='landing d-flex'>
        <div className='leftContent d-flex ms-auto me-5 w-50 py-4 align-self-center justify-content-center'>
          <div className='d-inline-block'>
            <h3 className='fancyLetters'>Shop Our <br/>Unique<br/>Products</h3>
            <button className='btn btn-outline-primary mt-4 w-100'>
              <Link className='text-decoration-none' to='/catalog'>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='aboutSection py-5 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
      </div>
      <div className='featuredProductsList d-flex justify-content-center'>
        <div className='bg-transparent'>
          <div className='customCard'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
          </div>
          <div className='customCard'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
          </div>
          <div className='customCard'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
          </div>
          <div className='customCard'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis consequuntur doloremque a ad, perspiciatis magni facere, molestiae pariatur unde rerum suscipit et expedita velit quisquam voluptatem fugiat, nam hic recusandae aspernatur ipsam. Fugiat sint iure omnis. Voluptas vitae dolore, vel dolor neque sit, nemo aut molestiae natus ipsum doloremque! Laboriosam asperiores adipisci possimus error ut earum modi vitae architecto quia in harum aspernatur est quisquam quo voluptate eius repellendus impedit sint tenetur expedita ad, voluptates commodi quod perferendis. Illum accusamus soluta qui facilis voluptatum sequi, culpa voluptatibus voluptatem, fugit maiores modi porro? Dolores culpa facere quidem consequuntur iusto rerum iure?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis sit quis quaerat possimus odio repellat tempora, ipsa fugiat nobis eaque nesciunt officiis velit praesentium et sequi nostrum molestiae dolorem consequatur.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;