import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/fontawesome-free-solid'


function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*Column 1*/}
                            <div className="col-md-3 col-sm-6">
                            <h5>Contact us</h5>
                    <ul className="list-unstyled">
                        <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <i class="bi bi-geo-alt-fill"></i>
                        &nbsp; Ariana, Tunis
    
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faPhone} />
                        &nbsp; +21621611873
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        &nbsp; BingoJS@esprit.tn
                        </li>
                    </ul>
                </div>
                {/*Column 2*/}
                <div className="col-md-3 col-sm-6">
                    <h5>About US</h5>
                    <ul className="list-unstyled">
                        <li>
                        We are a bunch of Computer Science Engineering students at ESPRIT specialized in Web Developement.
                        
                        </li>
                       
                    </ul>
                </div>
            </div>
           {/*Footer Bottom*/}
           <div className="footer-bottom">
               <div className="text-xs-center">
                   &copy;{new Date().getFullYear()} BingoJS HR Virtual Assistant  - All Rights Reserved 
               </div>
               </div> 
        </div>
        </div>
        </FooterContainer>
    );
}
export default  Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    background: rgb(32, 0, 32);
    color: white;
    height: 250px;
    font-size: 12px;
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}
.main-footer {
    height: 4rem;
}
`;
