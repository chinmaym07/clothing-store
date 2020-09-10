import React from 'react';
import '../directory/directory.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component';
import { connect } from 'react-redux';
import  selectDirectorySections  from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';


const Directory = ({items}) => (
    <div className="directory-menu">
        {
            items.map(({id, ...otherItemProps})=>(
                <MenuItem key={id} {...otherItemProps}/>
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    items : selectDirectorySections
})
export default connect(mapStateToProps)(Directory);