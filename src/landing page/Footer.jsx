import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="px-50 border-t-1 border-t-gray-400">

      <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr_1fr] py-10">
        <div>
          <img className="w-62/100 mb-5" src="images/logo.svg" alt="" />
          <p className="text-sm mb-5">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>

          <div className="pb-5 border-b-1 border-b-gray-400 mb-5">
            <FaXTwitter class="inline  mr-5" />
            <ImFacebook2 class="inline  mr-5" />
            <FaInstagram class="inline  mr-5" />
            <FaLinkedinIn class="inline " />
          </div>

          <div>
            <FaYoutube class="inline mr-5" /> <FaWhatsapp class="inline mr-5" />
            <FaTelegram class="inline" />
          </div>
        </div>

        <div className="justify-self-center flex flex-col gap-3">
          <h1 class="text-xl">Account</h1>
          <h2>Open demat account</h2>
          <h2>Minor demat account</h2>
          <h2>NRI demat account</h2>
          <h2>Commodity</h2>
          <h2>Dematerialisation</h2>
          <h2>Fund transfer</h2>
          <h2>MTF</h2>
          <h2>Referral program</h2>
        </div>

        <div className="justify-self-center flex flex-col gap-3">
          <h1 class="text-xl">Support</h1>
          <h2>Contact us</h2>
          <h2>Support portal</h2>
          <h2>How to file a complaint?</h2>
          <h2>Status of your complaints</h2>
          <h2>Bulletin</h2>
          <h2>Circular</h2>
          <h2>Z-Connect blog</h2>
          <h2>Downloads</h2>
        </div>

        <div className="justify-self-center flex flex-col gap-3">
          <h1 class="text-xl">Company</h1>
          <h2>About</h2>
          <h2>Philosophy</h2>
          <h2>Press & media</h2>
          <h2>Careers</h2>
          <h2>Zerodha Cares (CSR)</h2>
          <h2>Zerodha.tech</h2>
          <h2>Open source</h2>
        </div>

        <div className="justify-self-center flex flex-col gap-3">
          <h1 class="text-xl">Quick Links</h1>
          <h2>Upcoming IPOs</h2>
          <h2>Brokerage charges</h2>
          <h2>Market holidays</h2>
          <h2>Economic calendar</h2>
          <h2>Calculators</h2>
          <h2>Markets</h2>
          <h2>Sectors</h2>
        </div>
      </div>

      <p  class='text-xs mb-5'>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

      <p class='text-xs mb-5'>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

      <p class='text-xs mb-5'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

      <p class='text-xs mb-5'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

      <p class='text-xs mb-5'>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

      <p class='text-xs mb-5'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

      <div className="pl-30 flex gap-5  text-sm pb-5">
        <div>NSE</div>
        <div>BSE</div>
        <div>MCX</div>
        <div>Terms & conditions </div>
        <div>Policies & procedures </div>
        <div>Privacy policy </div>
        <div>Disclosure </div>
        <div>For investor's attention </div>
        <div>Investor charter</div>
      </div>

    </footer>

  );
  
};

export default Footer;
