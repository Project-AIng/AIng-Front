import React from 'react';
import Banner from '../components/HomeComponents/Banner';
import HomeServe from '../components/HomeComponents/HomeServe';
import DownloadCountPage from '../components/HomeComponents/DownloadCount';
import HomeServe1 from '../components/HomeComponents/HomeServe1';
import HomeServe2 from '../components/HomeComponents/HomeServe2';


export default function Home() {
    return (
        <>
        <Banner/>         
        <HomeServe2/>      
        <HomeServe1/>
        <HomeServe/>
        <DownloadCountPage/>
        </>
    )
}