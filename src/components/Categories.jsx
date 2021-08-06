import React from 'react';
import '../style/component/categories.scss'

function Categories({items, activeCategory, setActiveCategory}) {


    return (
        <div className={'category'}>

            <ul className={'categories'}>
                <li className={`${activeCategory === null ? 'active' : ''}`} onClick={() => setActiveCategory(null)}>
                    <button type={'button'}>Все</button>
                </li>
                {items && items.map((item, index) =>
                    <li key={index} className={`${activeCategory === index ? 'active' : ''}`}>
                        <button type={"button"} onClick={()=>setActiveCategory(index)}>{item}</button>
                    </li>
                )}
            </ul>

        </div>
    );
}

export default Categories;
