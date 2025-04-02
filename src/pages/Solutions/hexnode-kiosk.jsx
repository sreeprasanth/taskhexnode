import React from 'react';
import PageDetailsOverview from '../../components/PageDetailsOverview';
import ComapnyFeedBack from '../../components/CompanyFeedback';
import KioskModes from '../../components/KioskModes';
import KioskModeOffers from '../../components/KioskModeOffers';
import Testimonial from '../../components/Testimonial';
import CompanyCarousel from '../../components/CompanyCarosuel';
import Platform from '../../components/Platforms';
import Signup from '../../components/Signup';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const HexnodeSolutions = () => {
    return (
        <>
            <Header />
            <PageDetailsOverview />
            <ComapnyFeedBack />
            <KioskModes />
            <KioskModeOffers />
            <Testimonial />
            <CompanyCarousel />
            <Platform />
            <Signup />
            <Footer />

        </>
    );
};

export default HexnodeSolutions;