import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadHomeCategories } from '../../features/categories/categoriesSlice';
import { loadProducts } from '../../features/products/productsSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const categories = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(loadProducts());
    dispatch(loadHomeCategories())
  }, [dispatch]);

  return (
    <div
      className='Home'
      style={{
        backgroundImage: `url(https://picsum.photos/1920/1080)`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div
        className='landing d-flex'
        style={{
          backgroundImage: `url(https://picsum.photos/1920/400)`
        }}
      >
        <div className='leftContent d-flex ms-auto me-5 w-50 py-4 align-self-center justify-content-center'>
          <div className='d-inline-block'>
            <h3 className='fancyLetters'>
              Shop Our <br />
              Unique
              <br />
              Products
            </h3>
            <Link
              className='btn btn-outline-primary mt-4 w-100 text-decoration-none'
              to='/catalog'
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className='categoriesSection py-5'>
        <div className='row justify-content-around'>
          {
            categories.list.map((category, index) => (
              <div className={`col-11 my-4 col-md-6 col-lg-4 ${index > 2 && 'd-lg-none'}`} key={category.Id}>
                <div className='categoryCard card p-5'>
                  <h4 className='fw-bold'>{category.Label}</h4>
                  <img className='p-5' src={category.ImageURL ? category.ImageURL : `http://placeimg.com/640/480?cache=${Math.random()}`} alt={category.Label} />
                  <p>{category.Description}</p>
                  <div className='d-flex justify-content-center'>
                    <Link to='/catalog' className='btn btn-outline-secondary w-50'>Shop {category.Label}</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='aboutSection py-5 px-3'>
        <h2 className='text-center mb-5 fw-bold text-light'>As Seen In</h2>
        <div className='row justify-content-center'>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img
              className=''
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Huffington_Post_logo.svg/1200px-The_Huffington_Post_logo.svg.png'
              alt='HuffPost'
            />
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img
              className=''
              src='https://1000logos.net/wp-content/uploads/2016/11/CNN-Logo-1980.png'
              alt='HuffPost'
            />
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img
              className=''
              src='https://cdn.iconscout.com/icon/free/png-256/gq-282934.png'
              alt='HuffPost'
            />
          </div>
          <div className='col-6 col-md-3 col-lg-2 mb-5 text-center'>
            <img
              className=''
              src='https://1000logos.net/wp-content/uploads/2021/05/Forbes-logo.png'
              alt='HuffPost'
            />
          </div>
        </div>
        <div className='row justify-content-around'>
          <figure className='col-11 col-md-5 text-center'>
            <blockquote className='blockquote'>
              <p>
                &ldquo;An excellent company to work with! We marvel at the high
                quality and great customer service. Look forward to years of
                continued support from us.&rdquo;
              </p>
              <figcaption className='blockquote-footer'>
                Arthur Morgan <cite>Stars and Stripes Logistics</cite>
              </figcaption>
            </blockquote>
          </figure>
          <figure className='col-11 col-md-5 text-center'>
            <blockquote className='blockquote'>
              <p>
                &ldquo;Easy to work with an has great integration with our
                products and services. We enjoy the time saved working with the
                streamlined processes.&rdquo;
              </p>
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
            {products.list.length > 0 && (
              <div className='featuredProductCard px-5'>
                <h3 className='fw-bold'>{products.list[0].Name}</h3>
                <img
                  className='py-5 w-100'
                  src={products.list[0].ImageURL}
                  alt='featured product'
                />
                <p className='fst-italic'>{products.list[0].Description}</p>
                <div className='d-flex justify-content-center'>
                  <div className='w-50 text-end'>
                    <p className='fw-bold h5 strike text-danger'>
                      <del>$249</del>
                    </p>
                    <p className='fw-bold h5'>$199</p>
                    <Link
                      to='/catalog'
                      className='btn btn-outline-secondary w-100 text-decoration-none'
                    >
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='customCard'>
            {products.list.length > 0 && (
              <div className='featuredProductCard px-5'>
                <h3 className='fw-bold'>{products.list[1].Name}</h3>
                <img
                  className='py-5 w-100'
                  src={products.list[1].ImageURL}
                  alt='featured product'
                />
                <p className='fst-italic'>{products.list[1].Description}</p>
                <div className='d-flex justify-content-center'>
                  <div className='w-50 text-end'>
                    <p className='fw-bold h5 strike text-danger'>
                      <del>$249</del>
                    </p>
                    <p className='fw-bold h5'>$199</p>
                    <Link
                      to='/catalog'
                      className='btn btn-outline-secondary w-100 text-decoration-none'
                    >
                      BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='customCard textCard'>
            <p className='bigText text-white h2 p-5 text-secondary fw-bold text-uppercase'>
              <span className='h1'>W</span>HAT MAKES US <span className='text-danger'>SO GREAT</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. <i>Ipsum itaque</i> debitis ad nesciunt repudiandae est
              repellendus quae consectetur <span className='text-primary'>sit fugiat!</span>
            </p>
          </div>
          <div className='customCard footerCard p-5'>
            <h5>Conga eCommerce ROC</h5>
            <div className='row justify-content-around'>
              <div className='col-5'>
                <b className='d-block mt-4'>OUR SITE</b>
                <div className='ms-3'>
                  <Link to='/' className='text-decoration-none'>Home</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Catalog</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Products</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Settings</Link>
                </div>
              </div>
              <div className='col-5'>
                <b className='d-block mt-4'>CONTACT</b>
                <div className='ms-3'>
                  <Link to='/' className='text-decoration-none'>Email</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Address Info</Link>
                </div>
                <b className='d-block mt-4'>FOLLOW</b>
                <div className='ms-3'>
                  <Link to='/' className='text-decoration-none'>Twitter</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Instagram</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>YouTube</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>Facebook</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>CodePen</Link>
                </div>
                <div className='ms-3'>
                  <Link to='/catalog' className='text-decoration-none'>GitHub</Link>
                </div>
              </div>
            </div>
            <p className='mt-5 mb-0 text-center'>&copy; Conga eCommerce ROC 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
