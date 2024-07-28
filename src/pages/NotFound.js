import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Sitemap from '../parts/HomePage/Sitemap';
import PageErrorMessage from '../parts/PageErrorMessage';
import Document from '../parts/Document';

export default function NotFound() {

    return (
        <Document>
            <Header theme="black" />
            <PageErrorMessage />
            <Sitemap />
            <Footer />
        </Document>
    )
}
