import React from 'react';
import {Link} from 'react-router-dom';

import cartEmptyImg from '../assets/img/empty-cart.png';

export const CartEmpty: React.FC = () => (
    <div className="cart cart--empty">
        <h2>
            Košík je prázdný <span>😕</span>
        </h2>
        <p>
            Pravděpodobně jste si ještě neobjednali pizzu.
            <br/>
            Chcete-li si objednat pizzu, přejděte na domovskou stránku.
        </p>
        <img src={cartEmptyImg} alt="Empty cart"/>
        <Link to="/" className="button button--black">
            <span>Go back</span>
        </Link>
    </div>
);
