import '../style/pages/home.scss'
import PizzaBlock from "../components/PizzaBlock";
import {useSelector, useDispatch} from "react-redux";
import PizzaLoadingBlock from "../components/PizzaLoadingBlock";
import Categories from "../components/Categories";
import SortProduct from "../components/SortProduct";
import React, {useEffect} from "react";
import {changeCategory, changeSortType} from '../store/reducers/filterReducer'
import {filterPizzaByCategory, filterPizzaBySortType} from "../store/reducers/pizzaReducer";
import {addPizza, clearGetPizzaCount, getPizzaCount} from "../store/reducers/cartReducer";

const sorts = [
    {value: 'популярности', name: 'rating'},
    {value: 'цене', name: 'price'},
    {value: 'алфавиту', name: 'name'},
]

function Home() {

    const {pizzas, isLoading, activeCategory, activeSortType, countItem, items} =
        useSelector(({pizzaReducer, filterReducer, cartReducer}) => {
            return {
                pizzas: pizzaReducer.pizzas,
                isLoading: pizzaReducer.isLoading,
                activeCategory: filterReducer.activeCategory,
                activeSortType: filterReducer.activeSortType,
                countItem: cartReducer.countItem,
                items: cartReducer.items
            }
        })


    useEffect(() => {
        dispatch(clearGetPizzaCount())
        pizzas.map(item => getItemCount(item.id))
    }, [items, pizzas])


    function getItemCount(pizzaId) {
        dispatch(getPizzaCount(pizzaId))
    }


    const arr = Array(12).fill(0);

    const dispatch = useDispatch();


    function setActiveCategory(activeCategoryIndex) {
        dispatch(filterPizzaByCategory({
            category: activeCategoryIndex,
            sort: getSortName(activeSortType),
            order: activeSortType === 2 ? 'asc' : 'desc'
        }))
        dispatch(changeCategory(activeCategoryIndex))
    }


    function setActiveSortType(activeSortTypeIndex) {
        dispatch(filterPizzaBySortType({
            category: activeCategory,
            sort: getSortName(activeSortTypeIndex),
            order: activeSortTypeIndex === 2 ? 'asc' : 'desc'
        }))
        dispatch(changeSortType(activeSortTypeIndex))
    }

    function getSortName(sortIndex) {
        return sortIndex === 0 ? sorts[0].name :
            sortIndex === 1 ? sorts[1].name : sorts[2].name
    }

    function addPizzaToCart(pizzaItem) {
        dispatch(addPizza(pizzaItem))
    }

    return (
        <div className={'home'}>
            <div className={'container'}>
                <div className="home_header">
                    <Categories
                        items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}/>
                    <SortProduct
                        sorts={[sorts[0].value, sorts[1].value, sorts[2].value]}
                        activeSortType={activeSortType}
                        setActiveSortType={setActiveSortType}/>
                </div>

                <h1 className={'content_title'}>Все пиццы</h1>

                <div className="content_body">
                    {
                        isLoading ?
                            pizzas.map(item =>
                                <PizzaBlock item={item} key={item.id} addPizza={addPizzaToCart}
                                            countPizza={countItem}/>)
                            : arr.map(_ =>
                                <PizzaLoadingBlock/>
                            )
                    }
                </div>
            </div>
        </div>
    );
}

export default Home
