import React, { FC } from 'react'
import PageWrapper from "../components/PageWrapper";

const About: FC = () => {
    return (
        <PageWrapper>
            <div className="p-4 md:p-6">
                <h1 className="text-2xl font-bold text-center">About Us</h1>
                <p className="text-center mt-4 text-gray-600">
                    This is the animated About page using PageWrapper.
                </p>
            </div>
        </PageWrapper>
    );
};

export default About;
