import React, { useState, useEffect } from 'react';
import { apiUrl, consumerKey, consumerSecret } from '../../components/WooApi';
import axios from 'axios';
import OAuth from "oauth-1.0a";
import CryptoJS from "crypto-js";
import { Link } from 'react-router-dom';
import { SkeletonLoading } from '../../App';

export const CategoryBeautySubs = () => {
    const [loadingSubCategory, setLoadingSubCategory] = useState(true);
    const [subcategories, setSubCategories] = useState([]);

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

        const fetchBeautySubs = async () => {
            try {
                const requestData = {
                    url: `${apiUrl}/products/categories/?per_page=100&parent=20`,
                    method: 'GET',
                };
                const headers = oauth.toHeader(oauth.authorize(requestData));

                const response = await axios.get(requestData.url, { headers });
                setSubCategories(response.data);
                setLoadingSubCategory(false);
            } catch (error) {
                console.error('Error fetching product categories:', error);
                setLoadingSubCategory(false);
            }
        };

        fetchBeautySubs();
        
    }, []);
    
    return (
        <div className='container'>
            <div className='col'>
                {loadingSubCategory ? (
                    <SkeletonLoading/>
                ): (
                <div className='subcategories-section'>
                    <ul className='flex flex-wrap justify-center text-center sub-categories'>
                        {subcategories.map(category => (
                        <li className={category.id + '-' + category.slug + ' ' + 'p-2'} key={category.id}>
                            <Link to={'/' + 'product-categories' + '/' + 'beauty' + '/' + `${category.slug}`} className='rounded'>
                                {category.image && <img src={category.image.src} alt={category.name} />}
                            <span>{category.name}</span></Link>
                        </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </div>
    );
}

export const SubCategoryProducts = () => {

    const [loadingProducts, setLoadingProducts] = useState(true);
    const [products, setProducts] = useState([]);

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

    const fetchBeautyProducts = async () => {
        try {
            const requestData = {
                url: `${apiUrl}/products/?per_page=100&category=20`,
                method: 'GET',
            };
            const headers = oauth.toHeader(oauth.authorize(requestData));

            const response = await axios.get(requestData.url, { headers });
            setProducts(response.data);
            setLoadingProducts(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoadingProducts(false);
        }
    };
    
    fetchBeautyProducts();
    }, []);

    return (
        <div className='container'>
            <div className='col'>
                {loadingProducts ? (
                    <SkeletonLoading/>
                ) : (
                    <div className='products-section'>
                        <ul className='flex flex-wrap justify-center text-center products'>
                            {products.map(product => (
                                <li className={product.id + ' ' + product.slug + ' ' + 'p-2'} key={product.id}>
                                    <Link to={'/' + 'product-categories' + '/' + 'beauty' + '/' + `${product.slug}`} className='rounded'>
                                        {product.images && <img src={product.images[0].src} alt={product.name} />}
                                    <span>{product.name}</span></Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

const CategoryBeauty = () => {

    const [items, setItems] = useState([]);
    
    return (
        <div id='main'>
            {items.length > 0 && (
            <section className='subcategory-page-section'>
                <h1 className='text-center text-3xl'>Beauty</h1>
                    <CategoryBeautySubs setItems={setItems}/>
            </section>
            )}
            <section className='products-page-section'>
                <SubCategoryProducts/>
            </section>
        </div>
    )
};

export default CategoryBeauty;