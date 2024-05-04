import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import { apiUrl, consumerKey, consumerSecret } from '../components/WooApi';
import axios from 'axios';
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { Link } from 'react-router-dom';
import { SkeletonLoading } from '../App';

export const ProductCategoriesList = () => {
    
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const oauth = OAuth({
            consumer: {
                key: consumerKey,
                secret: consumerSecret,
            },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
            },
        });

        const fetchData = async () => {
            try {
                const requestData = {
                    url: `${apiUrl}/products/categories/?per_page=100&parent=0`,
                    method: 'GET',
                };
                const headers = oauth.toHeader(oauth.authorize(requestData));

                const response = await axios.get(requestData.url, { headers });
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product categories:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            {loading ? (
                <SkeletonLoading/>
            ): (
            <ul className='flex flex-wrap justify-center text-center categories-list'>
                {categories.map(category => (
                <li className={category.id + ' ' + category.slug + ' ' + 'p-2'} key={category.id}>
                    <Link to={'/' + 'product-categories' + '/' + `${category.slug}`}>
                        {category.image && <img src={category.image.src} alt={category.name} className='p-0.5' />}
                    <span className='block bg-gray-100'>{category.name}</span></Link>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
}

const ProductCategories = () => {
    return (
        <div id='main'>
            <section className='product-categories-page-section'>
                <h1 className='text-center text-3xl font-bold'>Product Categories</h1>
                <ProductCategoriesList/>
            </section>
        </div>
    )
};

export default ProductCategories;