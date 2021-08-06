import React from 'react';
import ContentLoader from "react-content-loader";

function PizzaLoadingBlock() {
    return (
        <div style={{marginBottom:'50px', marginLeft:'10px', marginRight:'10px'}}>

               <ContentLoader
                   speed={2}
                   width={280}
                   height={460}
                   viewBox="0 0 280 460"
                   backgroundColor="#f3f3f3"
                   foregroundColor="#ecebeb"
               >
                   <circle cx="140" cy="125" r="120" />
                   <circle cx="168" cy="182" r="15" />
                   <rect x="0" y="270" rx="5" ry="5" width="280" height="30" />
                   <rect x="0" y="315" rx="9" ry="9" width="280" height="70" />
                   <rect x="0" y="415" rx="5" ry="5" width="100" height="25" />
                   <rect x="120" y="405" rx="22" ry="25" width="160" height="44" />
               </ContentLoader>
        </div>
    );
}

export default PizzaLoadingBlock;