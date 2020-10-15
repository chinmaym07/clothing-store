import React from 'react';
import {DirectoryContainer} from './directory.styles';
import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';
import  selectDirectorySections  from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';


const Directory = ({items}) => (
    <DirectoryContainer>
        {
            items.map(({id, ...otherItemProps})=>(
                <MenuItem key={id} {...otherItemProps}/>
            ))
        }
    </DirectoryContainer>
)
const mapStateToProps = createStructuredSelector({
    items : selectDirectorySections
})
export default connect(mapStateToProps)(Directory);