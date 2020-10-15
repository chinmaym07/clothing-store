
import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';

import {fetchCollectionsStart} from '../../redux/shop/shop.action';

const ShopPage = ({fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart])
  return (
    <div className="shop-page">
      <CollectionsOverviewContainer/>
    </div>
  );
}



const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);