import React from "react";

import "../stylesheets/Footer.css"
import strings from "../string";
import { MdEmail } from 'react-icons/md';
import icon from "../images/icon.png";

import { BsFillTelephoneFill, BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaInstagramSquare } from 'react-icons/fa'
import { Outlet, Link } from "react-router-dom";




function Footer() {
    return (
        <div className="ft-body">
            <div className="ft-1">
                <img src={icon} height={100} style={{ marginTop: "-23px" }}></img>
                <h4>tagline</h4>


                <div className="mail-section detail">
                    <MdEmail /> {strings.EmailID}

                </div>
                <div className="phone-section detail">
                    <MdEmail />{strings.PhoneNo}
                </div>

                <div className="follow-section detail">
                    <h3><b>{strings.Follow}</b></h3>


                    <button onClick={event => window.location.href = '/'} className="wabtn" >
                        <IoLogoWhatsapp color="#ff8b94" size={30} /></button>

                    <button onClick={event => window.location.href = '/'} className="instabtn" >

                        <FaInstagramSquare color="#ff8b94" size={30} /></button>

                    <button onClick={event => window.location.href = '/'} className="fbbtn" >
                        <BsFacebook color="#ff8b94" size={30} /></button>

                </div>
            </div>

            <div className="ft-2">
                <h3>{strings.QuickLink}</h3>

                <li> <Link className="mx-2 ft-links" style={{ textDecoration: "none", color:"black" }} to="/">
                    {strings.Home}</Link></li>

                <li> <Link className="mx-2 ft-links" style={{ textDecoration: "none", color:"black" }} target="_blank" to="/cources">
                    {strings.Cources}</Link></li>

                <li> <Link className="mx-2 ft-links" style={{ textDecoration: "none", color:"black" }} target="_blank" to="/dailyFeed">
                    {strings.DailyFeed}</Link></li>

                <li> <Link className="mx-2 ft-links" style={{ textDecoration: "none", color:"black" }} target="_blank" to="/aboutPage">
                    {strings.AboutUs}</Link></li>

                <li> <Link className="mx-2 ft-links" style={{ textDecoration: "none", color:"black" }} target="_blank" to="/contact">
                    {strings.Contact}</Link></li>


            </div>


            <div className="ft-2">
                <h3>{strings.TopProg}</h3>

                <li><a href="/" className="ft-links">{strings.cource1}</a></li>
                <li><a href="/" className="ft-links">{strings.cource2}</a></li>
                <li><a href="/" className="ft-links">{strings.cource3}</a></li>
                <li><a href="/" className="ft-links">{strings.cource4}</a></li>
                <li><a href="/" className="ft-links">{strings.cource6}</a></li>
                <li><a href="/" className="ft-links">{strings.cource7}</a></li>

            </div>


            <div style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>

                <button className="mx-2 btn-color" >
                    <b>{strings.Register}</b></button>

                <Link to="/contact" target="_blank">
                    <button className="mx-2 btn-plain">
                        <b>{strings.Contact}</b></button>
                </Link>

            </div>
            <Outlet />
        </div>
    )
}

export default Footer;