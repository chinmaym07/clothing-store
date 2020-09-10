import React from 'react';
import './shop.styles.scss';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';


const ShopPage = ({match}) => (
        <div className="shop-page">
          <CollectionsOverview />
        
        </div>
);


export default ShopPage;