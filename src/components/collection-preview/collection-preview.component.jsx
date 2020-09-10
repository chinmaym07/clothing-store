import React from 'react';
import {
    CollectionPreviewContainer,
    PreviewContainer,
    TitleContainer
} from './collection-preview.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPreview = ({routeName,title,items})=>
{
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title.toUpperCase()}</TitleContainer>      
                <PreviewContainer>
                    {
                        items
                        .filter((item,idx) => idx < 4)
                        .map((item)=>(
                            <CollectionItem key={item.id} item={item}/>
                        ))    
                    }
                    
                </PreviewContainer>
        </CollectionPreviewContainer>
    );
}
export default CollectionPreview;