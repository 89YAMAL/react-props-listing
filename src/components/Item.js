import React from "react";
import PropTypes from "prop-types";

export default function Item({item}) {

    function titleLength(title) {
        if (!title) return;
        if (title.length > 50) return title.slice(0, 50) + '...';
    }

    function currencyPrice(currency) {
        if (currency === 'USD') return '$';
        else if (currency === 'EUR') return '€';
        return currency + ' ';
    }

    function quantityLevel(quantity) {
        if (quantity <= 10) return 'level-low';
        if (quantity <= 20) return 'level-medium';
        return 'level-high';
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={ item.url }>
                    <img src={ item.MainImage && item.MainImage.url_570xN } alt="" />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{ titleLength(item.title) }</p>
                <p className="item-price">{ currencyPrice(item.currency_code) }{ item.price }</p>
                <p className={"item-quantity " + quantityLevel(item.quantity)}>{`${item.quantity} left`}</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    item: PropTypes.object
}
