import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

export default () => (
  <Carousel
    autoPlay
    infiniteLoop
    showArrows={true}
    showThumbs={false}
    stopOnHover={false}
    interval={5000}
    showStatus={false}
  >




    <div>
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
        alt="amazon-banner"
      />
    </div>



    <div>
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
        alt="amazon-banner"
      />
    </div>




    <div>
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png"
        alt="amazon-banner"
      />
    </div>


    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/WLA/September/PowerbankDays/V247648343_WLA-Powerbank_Days_september_1500x600._CB405305508_.jpg"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/September/SSW/GW/GW_PC_1500x600._CB404931378_.jpg"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/Hobby_store/Hero/Version2/1500x600._CB410085967_.png"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under-1499_store_Graphics_1500x600._CB406499464_.jpg"
        alt="amazon-banner"
      />
    </div>
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Nokia/5.3/Sep1/GW/V240911677_IN_WLME_Nokia_5_3_DesktopTallHero_1500x600_1._CB406805562_.jpg"
        alt="amazon-banner"
      />
    </div>
  </Carousel>
);