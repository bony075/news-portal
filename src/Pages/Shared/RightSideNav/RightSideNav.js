import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2'><FaGoogle></FaGoogle> Sign in Google</Button>
                <Button variant="secondary"><FaGithub></FaGithub> Sign in git hub</Button>
            </ButtonGroup>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>


        </div>
    );
};

export default RightSideNav;