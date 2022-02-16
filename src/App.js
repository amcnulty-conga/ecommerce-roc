import { useTranslation } from 'react-i18next';
import 'conga-component-library';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadProducts } from './features/products/productsSlice';
import Header from './shared/Header/Header';
import ActionBar from './shared/ActionBar/ActionBar';
import VerticalNav from './shared/VerticalNav/VerticalNav';
import Main from './routes/Main/Main';

function App() {
  const { t } = useTranslation();
  const products = useSelector(state => state.products);
  console.log('products :>> ', products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const navList = [
    {
      groupLabel: 'WELCOME',
      list: [
        {
          icon: 'home',
          label: 'Quick Start Home'
        }
      ]
    },
    {
      groupLabel: 'Quick Start Setup',
      list: [
        {
          icon: 'cog',
          label: 'General Setting'
        },
        {
          icon: 'upload',
          label: 'Upload Products'
        },
        {
          icon: 'list',
          label: 'Upload Catalog'
        },
        {
          icon: 'tags',
          label: 'Upload Price List',
        }
      ]
    }
  ]

  const verticalNavConfig = {
    collapsible: false,
    filterable: false
  }

  return (
    <div className='App LightTheme'>
      <Header/>
      <ActionBar/>
      <div className='bodyContent d-flex'>
        <VerticalNav/>
        <Main/>
      </div>
      {/* <cc-app-bar productName='eCommerce ROC' brand='eCom' userName='Aaron' userEmail='amcnulty@conga.com' userAbbr='AM'></cc-app-bar>
      <cc-action-bar></cc-action-bar>
      <div className='row' style={{marginTop: '49px'}}>
        <div className='col-3'>
          <cc-vertical-nav config={verticalNavConfig} filterable={false}></cc-vertical-nav>
        </div>
        <div className='col-9'>
          <div className='border bg-white p-3 d-flex justify-content-between'>
            <h5>Bulk Upload of Products</h5>
            <span className='d-flex align-items-center'>
              <cc-icon name='question'></cc-icon>
              <a className='text-decoration-none' href="#">Help</a>
            </span>
          </div>
          <div className='bg-white p-3 border border-top-0'>
            <cc-tab-set>
              <cc-tab-item role="heading" slot="tab">Download Product Data Template</cc-tab-item>
              <cc-tab-panel role="region" slot="panel">
                <div className='row'>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                  <div className='col-6'>
                    <cc-card selectedTemplate='defaultGrid' ></cc-card>
                  </div>
                </div>
              </cc-tab-panel>
              <cc-tab-item role="heading" slot="tab">Upload Product Data</cc-tab-item>
              <cc-tab-panel role="region" slot="panel">Upload Product Data Content</cc-tab-panel>
              <cc-tab-item role="heading" slot="tab">View Upload History</cc-tab-item>
              <cc-tab-panel role="region" slot="panel">View Upload History Content</cc-tab-panel>
            </cc-tab-set>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
