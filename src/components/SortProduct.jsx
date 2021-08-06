import React, {useEffect, useRef, useState} from 'react';
import '../style/component/sortProduct.scss'

function SortProduct({sorts, activeSortType, setActiveSortType}) {

    const [visible, setVisible] = useState(false);
    const [iconVisible, setIconVisible] = useState(false);


    let sortRef = useRef();

    function changeSort(index) {
        setActiveSortType(index)
        setVisible(false)
        setIconVisible(false)
    }

    function changeVisible() {
        setVisible(p => !p)
        setIconVisible(p => !p)
    }

    useEffect(()=>{
        document.body.addEventListener('click', handleClick)
    },[])

    function handleClick(event){
        let check = event.path.includes(sortRef.current)
        !check &&  setVisible(false)
    }

    return (
        <div className="category_sort" ref={sortRef}>
            {visible ?
                <span className={'sort_up'} style={{display: iconVisible}}><i className="fas fa-sort-up"> </i></span>
                :
                <span className={'sort_down'} style={{display: !iconVisible}}>    <i className="fas fa-sort-down"> </i> </span>
            }
            <p className={'sort_title'}>Сортировка по:</p>
            <p className={'sort_value'} onClick={changeVisible}>{sorts[activeSortType]}</p>
            {visible &&
            <ul className={'sorts'}>
                {sorts.map((item, index) =>
                    <li onClick={() => changeSort(index)} key={index}
                        className={`${item === sorts[activeSortType] ? 'active' : ''}`}>{item}</li>
                )}
            </ul>
            }
        </div>
    );
}

export default SortProduct;