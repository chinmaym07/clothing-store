import React from 'react';
import { connect } from 'react-redux';
import {CollectionOverviewContainer} from './collection-overview.styles';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';


const CollectionsOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionForPreview
})


export default connect(mapStateToProps)(CollectionsOverview);