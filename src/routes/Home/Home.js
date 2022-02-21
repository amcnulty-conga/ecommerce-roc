import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts } from '../../features/products/productsSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className='Home' style={{
      backgroundImage: `url(https://picsum.photos/1920/1080)`,
      backgroundAttachment: 'fixed'
    }}>
      <div className='landing d-flex'>
        <div className='leftContent d-flex ms-auto me-5 w-50 py-4 align-self-center justify-content-center'>
          <div className='d-inline-block'>
            <h3 className='fancyLetters'>Shop Our <br/>Unique<br/>Products</h3>
            <Link className='btn btn-outline-primary mt-4 w-100 text-decoration-none' to='/catalog'>Shop Now</Link>
          </div>
        </div>
      </div>
      <div className='aboutSection py-5 px-3'>
        <h2 className='text-center mb-5 fw-bold text-light'>As Seen In</h2>
        <div className='row justify-content-center'>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img className='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Huffington_Post_logo.svg/1200px-The_Huffington_Post_logo.svg.png' alt='HuffPost'/>
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img className='' src='https://1000logos.net/wp-content/uploads/2016/11/CNN-Logo-1980.png' alt='HuffPost'/>
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img className='' src='https://cdn.iconscout.com/icon/free/png-256/gq-282934.png' alt='HuffPost'/>
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img className='' src='https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png' alt='HuffPost'/>
          </div>
        </div>
        <div className='row justify-content-around'>
          <figure className='col-11 col-md-5 text-center'>
            <blockquote className='blockquote'>
              <p>&ldquo;An excellent company to work with! We marvel at the high quality and great customer service. Look forward to years of continued support from us.&rdquo;</p>
              <figcaption className='blockquote-footer'>
                Arthur Morgan <cite>Stars and Stripes Logistics</cite>
              </figcaption>
            </blockquote>
          </figure>
          <figure className='col-11 col-md-5 text-center'>
            <blockquote className='blockquote'>
              <p>&ldquo;Easy to work with an has great integration with our products and services. We enjoy the time saved working with the streamlined processes.&rdquo;</p>
              <figcaption className='blockquote-footer'>
                Rufus Shinra <cite>Shinra Energy Corp.</cite>
              </figcaption>
            </blockquote>
          </figure>
        </div>
      </div>
      <div className='featuredProductsList d-flex justify-content-center'>
        <div className='bg-transparent'>
          <div className='customCard'>
            {
              products.list.length > 0
              &&
              <div className='featuredProductCard px-5'>
                <h3 className='fw-bold'>{products.list[0].Name}</h3>
                <img className='py-5 w-100' src={products.list[0].ImageURL} alt='featured product'/>
                <p className='fst-italic'>{products.list[0].Description}</p>
                <div className='d-flex justify-content-center'>
                  <div className='w-50 text-end'>
                    <p className='fw-bold h5 strike text-danger'><del>$249</del></p>
                    <p className='fw-bold h5'>$199</p>
                    <Link to='/catalog' className='btn btn-outline-secondary w-100 text-decoration-none'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className='customCard'>
            {
              products.list.length > 0
              &&
              <div className='featuredProductCard px-5'>
                <h3 className='fw-bold'>{products.list[1].Name}</h3>
                <img className='py-5 w-100' src={products.list[1].ImageURL} alt='featured product'/>
                <p className='fst-italic'>{products.list[1].Description}</p>
                <div className='d-flex justify-content-center'>
                  <div className='w-50 text-end'>
                    <p className='fw-bold h5 strike text-danger'><del>$249</del></p>
                    <p className='fw-bold h5'>$199</p>
                    <Link to='/catalog' className='btn btn-outline-secondary w-100 text-decoration-none'>BUY NOW</Link>
                  </div>
                </div>
              </div>
            }
          </div>
          <div className='customCard'>
            <p className='h2 p-5 text-secondary fw-bold text-uppercase'>WHAT MAKES US SO GREAT Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum itaque debitis ad nesciunt repudiandae est repellendus quae consectetur sit fugiat!</p>
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