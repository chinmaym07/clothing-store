import React from 'react';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import {CollectionContainer , TitleContainer , ItemsContainer} from './collection.styles';
import {selectCollection} from '../../redux/shop/shop.selector'; 
import {fetchCollectionsStart} from '../../redux/shop/shop.action';

class CollectionPage extends React.Component {      
    
    componentDidMount()
    {
        const { fetchCollectionsStart} =  this.props;
        fetchCollectionsStart();
    }
    
    render(){  
        console.log("Collection Page");
        console.log(this.props.collection);    
        const {title , items} = this.props.collection;
        return (
                <CollectionContainer key={this.props.match.params.collectionId}>
                    <TitleContainer>{title}</TitleContainer>
                    <ItemsContainer>
                        {
                            items.map((item)=>(
                                <CollectionItem key={item.id} item={item}/>
                            ))
                        }
                    </ItemsContainer>
                </CollectionContainer>
        );
    }
}
const mapStateToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})
 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart:() =>dispatch(fetchCollectionsStart())
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(CollectionPage);