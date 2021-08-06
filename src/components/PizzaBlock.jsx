import React, {useEffect, useState} from 'react';
import '../style/component/pizzaBlock.scss'

function PizzaBlock({item, addPizza, countPizza}) {

    const pizzaType = ['тонкое', 'традиционное'];
    const pizzaSize = [26, 30, 40];
    const [activeType, setActiveType] = useState(item.types[0])
    const [activeSize, setActiveSize] = useState(item.sizes[0])

    function changeType(index) {
        setActiveType(index)
    }

    function changeSize(index) {
        setActiveSize(pizzaSize[index])
    }


    function addPizzaToCart(pizzaId) {
        const {imageUrl, name, price} = item
        addPizza({
            id: pizzaId,
            imageUrl,
            name,
            price,
            type: pizzaType[activeType],
            size: activeSize,
            count: 1
        })
    }



    return (
        <div className={'pizza_block'} key={item.id}>
            <img src={item.imageUrl} alt={'Photo not found!'}/>
            <h4 className={'pizza_name'}>{item.name}</h4>
            <div className={'pizza_details'}>
                <ul className={'pizza_type'}>
                    {pizzaType.map((type, index) =>
                        <li onClick={() => changeType(index)} key={index}
                            className={`${!item.types.includes(index) ? 'disabled' : (activeType === index ? 'active' : '')}`}>{type}</li>
                    )}
                </ul>
                <ul className={'pizza_size'}>
                    {pizzaSize.map((size, index) =>
                        <li key={index} onClick={() => changeSize(index)}
                            className={`${!item.sizes.includes(size) ? 'disabled' : (activeSize === size) ? 'active' : ''}`}>{size} см.</li>
                    )}
                </ul>
            </div>

            <div className="pizza_footer">
                <h6 className={'pizza_price'}>от {item.price} ₽</h6>
                <button type={'button'} onClick={() => addPizzaToCart(item.id)}>
                    <span className={'span_plus'}>+</span> Добавить

                    {countPizza.map(item2=> item2.id === item.id && item2.count !== 0 ?
                        <span className={'span_count'}>{item2.count}</span>
                        : ''
                    )}
                </button>
            </div>

        </div>


    );
}

export default PizzaBlock;
