import React, { useState } from "react";

const allNews = [
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Dhanya Nagasundaram",
    title:
      "Tata Technologies IPO allotment expected soon: GMP, subscription details, steps to check Tata Tech IPO allotment status | Mint - Mint",
    description:
      "Tata Technologies IPO share allotment is expected to be out soon. The investors who applied for the issue can check Tata Technologies IPO allotment status in the registrar's portal. Tata Technologies IPO listing date is scheduled on NSE and BSE for Thursday, …",
    url: "https://www.livemint.com/market/ipo/tata-technologies-ipo-allotment-expected-soon-gmp-subscription-details-steps-to-check-tata-tech-ipo-allotment-status-11701169338513.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2023/11/28/1600x900/tata_1700602704405_1701170854759.jpg",
    publishedAt: "2023-11-28T11:32:12Z",
    content:
      "Tata Technologies IPO allotment date: Tata Technologies IPO share allotment is expected to be out soon. The investors who applied for the issue can check Tata Technologies IPO allotment status in the… [+5306 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "CNBCTV18",
    },
    author: "Meghna Sen",
    title:
      "Adani Power, Adani Enterprises shares: What's driving the rally in Adani Group stocks — explained - CNBCTV18",
    description:
      "Adani Group stocks saw buying interest from market participants after the verdict in the Adani-Hindenburg case was reserved by a SC bench led by Chief Justice of India DY Chandrachud. The SC observed that capital market regulator SEBI must complete probe in a…",
    url: "https://www.cnbctv18.com/market/adani-power-adani-enterprises-shares-adani-group-stocks-rise-supreme-court-hindenburg-row-18419561.htm",
    urlToImage:
      "https://images.cnbctv18.com/wp-content/uploads/2023/05/adani-1019x573.jpg",
    publishedAt: "2023-11-28T11:21:39Z",
    content: "",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Dhirendra Kumar",
    title:
      "Govt clamps down on coaching-centre ads featuring civil-services exam toppers | Mint - Mint",
    description:
      "An inquiry by the Central Consumer Protection Authority concluded that the practice of coaching institutes using photos of toppers in their ads violates the ‘misleading advertisement’ and ‘unfair trade practices’ clauses of the Consumer Protection Act",
    url: "https://www.livemint.com/news/india/govt-clamps-down-on-coaching-centre-ads-featuring-civil-services-exam-toppers-11701169515352.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2023/11/28/1600x900/csee-kVmB--621x414LiveMint_1701169626328_1701169626473.jpg",
    publishedAt: "2023-11-28T11:11:04Z",
    content:
      "Toppers of Indias civil services examinations will no longer enjoy unfettered, round-the-year advertising revenue from institutes that offer coaching for Union Public Service Commision (UPSC) exams.\r… [+2552 chars]",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Restofworld.org",
    },
    author: "Viola Zhou",
    title: "Inside Foxconn’s India iPhone factory expansion - Rest of World",
    description:
      "Chinese engineers are flying to India to train the next generation of iPhone builders.",
    url: "https://restofworld.org/2023/foxconn-india-iphone-factory/",
    urlToImage:
      "https://149346090.v2.pressablecdn.com/wp-content/uploads/2023/11/Foxconn_065-1600x900.jpg",
    publishedAt: "2023-11-28T11:00:00Z",
    content:
      "When Chinese engineer Li Hai left the wintry cold of northern China and flew into the humid heat of Tamil Nadu in southern India, he had little idea what to expect.\r\nIt was early 2023. Months before … [+33020 chars]",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Moneycontrol",
    },
    author: "Moneycontrol News",
    title: "TCS share buyback to start on December 1 - Moneycontrol",
    description:
      "The equity shares are proposed to be bought back at a price of Rs 4,150 apiece",
    url: "https://www.moneycontrol.com/news/business/stocks/tcs-share-buyback-to-start-on-december-1-11821821.html",
    urlToImage:
      "https://images.moneycontrol.com/static-mcnews/2020/07/TATA-CONSULTANCY-SERVICES-770x433.jpg",
    publishedAt: "2023-11-28T09:54:17Z",
    content:
      "Tata Consultancy Services (TCS) Rs 17,000 crore share buyback will start on December 1 and end on December 7, the company said in an exchange filing on November 28.\r\nThe IT services firm proposes to … [+1666 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "Moneycontrol",
    },
    author: "Ananthu U",
    title:
      "Adani Total Gas launches green hydrogen blending project - Moneycontrol",
    description:
      "Adani Total Gas said blending 8 percent green hydrogen with natural gas would reduce carbon emission by 4 percent",
    url: "https://www.moneycontrol.com/news/business/stocks/adani-total-gas-launches-green-hydrogen-blending-project-11821731.html",
    urlToImage:
      "https://images.moneycontrol.com/static-mcnews/2023/09/Adani-Bloomberg-770x433.jpg",
    publishedAt: "2023-11-28T09:50:10Z",
    content:
      "Adani Total Gas has launched a green hydrogen blending pilot in Ahmedabad. The company will blend green hydrogen with natural gas for 4000 residential and commercial customers.\r\nThe project is expect… [+1611 chars]",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Dsij.in",
    },
    author: "Karan Dsij",
    title:
      "Rakesh Jhunjhunwala's multibagger real estate stock: Taking the right steps toward debt-free status by November 30; keep a close eye! - Dalal Street Investment Journal",
    description:
      "In a captivating turn of events, the Promoter Group has successfully divested 1.46 crore shares, equating to a 2.91 per cent stake in the company, raking in an impressive Rs 301 crore from the...",
    url: "https://www.dsij.in/dsijarticledetail/artmid/10163/articleid/34780/rakesh-jhunjhunwalas-multibagger-real-estate-stock-taking-the-right-steps-toward-debt-free-status-by-november-30-keep-a-close-eye-34780",
    urlToImage:
      "https://www.dsij.in/Portals/0/EasyDNNnews/34780/image_2210-800-417-p-C-955.jpg",
    publishedAt: "2023-11-28T09:43:50Z",
    content:
      "This strategic financial move is poised to render the company entirely debt-free on a standalone basis by or before November 30, 2023\r\nBreaking free from the sideways movement that characterized much… [+2744 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "Livemint",
    },
    author: "Livemint",
    title:
      "SpiceJet looking to raise $100mn, Ajay Singh in talks with credit funds: Report - Mint",
    description:
      "The development comes at a time when India's aviation sector has shown signs of improvement, and analysts pointing out that the prospects of SpiceJet have turned brighter following the grounding of bankruptcy-hit carrier GoFirst.",
    url: "https://www.livemint.com/companies/news/spicejet-looking-to-raise-100-million-promoter-ajay-singh-in-talks-with-credit-funds-report-11701162369937.html",
    urlToImage:
      "https://www.livemint.com/lm-img/img/2023/11/28/1600x900/SPICEJET-RESULTS--0_1692861718098_1701164089602.JPG",
    publishedAt: "2023-11-28T09:35:40Z",
    content:
      "Cash-strapped private carrier SpiceJet is looking to raise around $100 million, a report said on November 28, claiming that the airline's promoter Ajay Singh is in talks with global credit funds in a… [+1990 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "CarToq.com",
    },
    author: "Shantonil Nag",
    title:
      "India-spec upcoming Maruti Swift spotted before official launch - CarToq.com",
    description:
      "Suzuki has already unveiled the all-new fourth-generation Swift at the Tokyo Motor Show in November 2023. Given the Swift’s significance in India, Maruti Suzuki is actively working on the Indian-spec version of the fourth-gen Swift, which has been spotted tes…",
    url: "https://www.cartoq.com/india-spec-upcoming-maruti-swift-spotted-before-official-launch/",
    urlToImage:
      "https://www.cartoq.com/wp-content/uploads/2023/11/2024-all-new-maruti-swift-spied-indian-roads.jpg",
    publishedAt: "2023-11-28T09:05:29Z",
    content:
      "Suzuki has already unveiled the all-new fourth-generation Swift at the Tokyo Motor Show in November 2023. Given the Swift’s significance in India, Maruti Suzuki is actively working on the Indian-spec… [+2326 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "FXStreet",
    },
    author: "Haresh Menghani",
    title:
      "Gold remains below multi-month peak, downside seems limited amid Fed rate cut bets - FXStreet",
    description:
      "Gold price (XAU/USD) pushed through the $2,008-2,010 horizontal barrier and advanced to the $2,018 region on Monday, or its highest level since mid-May.",
    url: "https://www.fxstreet.com/news/gold-price-sits-near-six-month-peak-bullish-potential-intact-amid-dovish-fed-bets-202311280408",
    urlToImage:
      "https://editorial.fxstreet.com/images/TechnicalAnalysis/SupportResistance/stack-of-gold-coins-on-business-chart-gm511600904-86731181_Large.jpg",
    publishedAt: "2023-11-28T09:02:43Z",
    content:
      "<ul><li>Gold price struggles to build on the overnight breakout momentum through a key barrier. </li><li>A modest recovery in the US bond yields and the USD act as a headwind for the XAU/USD.</li><li… [+7912 chars]",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "CNBCTV18",
    },
    author: "https://www.cnbctv18.com",
    title:
      "India expected to see over ₹30,000 crore inflow after US federal pension fund index switch - CNBCTV18",
    description:
      "The Federal Retirement Thrift Investment Board has total assets of around $600 billion. The board has invested around $68 billion in the International Stock Index Investment Fund as of October 31, 2023.",
    url: "https://www.cnbctv18.com/market/india-expected-to-see-over-rs-30000-crore-inflow-after-us-federal-pension-fund-index-switch-18420671.htm",
    urlToImage:
      "https://images.cnbctv18.com/wp-content/uploads/2023/02/Rupee-1019x573.jpg",
    publishedAt: "2023-11-28T08:57:20Z",
    content: null,
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "India Today",
    },
    author: "India Today Business Desk",
    title:
      "Raymond boss Gautam Singhania writes to board, employees amid messy divorce - India Today",
    description:
      "Gautam Singhania publicly announced his separation from Nawaz Modi on November 13. In the aftermath, Nawaz Modi publicly accused Gautam Singhania of physical assault. The public fallout also led to a decline in Raymond's stock price.",
    url: "https://www.indiatoday.in/business/story/raymond-boss-gautam-singhania-writes-to-board-employees-amid-messy-divorce-says-operations-business-continuing-as-usual-2468519-2023-11-28",
    urlToImage:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202311/gautam-singhania-282938806-16x9_0.png?VersionId=lvSsXUkJmhS4UsqTx.QiUWOiWdnLCYsx",
    publishedAt: "2023-11-28T08:35:17Z",
    content:
      "Gautam Singhania, Chairman and Managing Director of Raymond Group, has reached out to the company’s board and employees in an internal communication to assure them that the messy divorce settlement p… [+4119 chars]",
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Moneycontrol",
    },
    author: "Vikas SN",
    title:
      "AMD unveils its largest global design centre in Bengaluru; will house 3,000 engineers - Moneycontrol",
    description:
      "AMD’s new Bengaluru facility is part of the $400 million India investment announced by the chip design firm at Semicon 2023.",
    url: "https://www.moneycontrol.com/news/technology/amd-unveils-its-largest-global-design-centre-in-bengaluru-will-house-3000-engineers-11821251.html",
    urlToImage:
      "https://images.moneycontrol.com/static-mcnews/2018/06/11b1a866ded4-770x433.jpg",
    publishedAt: "2023-11-28T08:27:18Z",
    content:
      "Semiconductor design firm Advanced Micro Devices (AMD) unveiled its largest global design centre in Bengaluru on November 28, a move that is expected to boost India's ambitions to become a semiconduc… [+3413 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "GaadiWaadi.com",
    },
    author: "Surendhar M",
    title:
      "Royal Enfield Himalayan 450 Deliveries To Begin Next Month - GaadiWaadi.com",
    description:
      "The customer deliveries of the Royal Enfield Himalayan 450 are expected to commence as early as next month in India",
    url: "https://gaadiwaadi.com/royal-enfield-himalayan-450-deliveries-to-begin-next-month/",
    urlToImage:
      "https://gaadiwaadi.com/wp-content/uploads/2023/11/royal-enfield-himalayan-450-5.jpg",
    publishedAt: "2023-11-28T08:14:30Z",
    content:
      "Royal Enfield revealed prices of the much-awaited second-generation Himalayan at the MotoVerse 2023 event in Goa. With a starting price of Rs. 2.69 lakh (ex-showroom), the dual-purpose adventure tour… [+1960 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Maruti Suzuki To Hike Car Prices From New Year | Other Car Makers Also Consider Price Increase - NEWS9 Live",
    description:
      "Maruti Suzuki, India’s largest car maker, is set to increase prices in the New Year on the back of inflation and high cost pressures. In addition, German lux...",
    url: "https://www.youtube.com/watch?v=_qRlEbFMk-4",
    urlToImage: "https://i.ytimg.com/vi/_qRlEbFMk-4/maxresdefault.jpg",
    publishedAt: "2023-11-28T07:27:54Z",
    content: null,
    Sentiment: "Controversial",
  },
  {
    source: {
      id: null,
      name: "Bqprime.com",
    },
    author: "Rishabh Mishra",
    title:
      "Stock Market Live: GIFT Nifty Signals Higher Open; Paytm, PB Fintech, SJVN, Eicher, Airtel, Vascon In Focus - BQ Prime",
    description:
      "Sensex closed up 204.16 points, or 0.3%, at 66174.20  while Nifty was 95 points or 0.48% higher at 19,889.70.",
    url: "https://www.bqprime.com/markets/stock-market-live-updates-28-november-2023-gift-nifty-signals-higher-open-paytm-pb-fintech-sjvn-eicher-airtel-vascon-in-focus",
    urlToImage:
      "https://gumlet.assettype.com/bloombergquint%2F2023-09%2F607e6d73-5404-433c-a904-6384a7752abf%2FWhatsApp_Image_2023_07_10_at_11_04_43__1_.jpeg?rect=0%2C0%2C1600%2C840&w=1200&auto=format%2Ccompress&ogImage=true",
    publishedAt: "2023-11-28T07:25:47Z",
    content:
      "India's benchmark stock indices ended Tuesday higher after a day's break on Monday for Guru Nanak Jayanti. The indices were mostly mixed through the day before recovering as Adani group company stock… [+1449 chars]",
    Sentiment: "Booming",
  },
  {
    source: {
      id: null,
      name: "Dsij.in",
    },
    author: "Karan Dsij",
    title:
      "Tata small-cap fund-backed tech gem soars with historic single-day gain on NVIDIA partnership; don't miss out on the action! - Dalal Street Investment Journal",
    description:
      "Bolstered by a robust order book of Rs 2,174 million and a promising pipeline, the management anticipates a significantly stronger second half for the company.",
    url: "https://www.dsij.in/dsijarticledetail/tata-small-cap-fund-backed-tech-gem-soars-with-historic-single-day-gain-on-nvidia-partnership-dont-miss-out-on-the-action-34776",
    urlToImage:
      "https://www.dsij.in/Portals/0/EasyDNNnews/34776/image_1300.jpg",
    publishedAt: "2023-11-28T07:11:41Z",
    content:
      "Indian markets displayed a mixed trend on Tuesday, with the Nifty 50 index maintaining its position above 19,800, marking a 0.16% increase. Conversely, the Sensex experienced a marginal decline of 0.… [+2793 chars]",
    Sentiment: "Booming",
  },
];

const NewsArticle = ({ article }) => (
  <div className="mb-8 border-4 p-3">
    <a href={article.url}>
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-40 object-cover mb-4"
      />
    </a>
    <a href={article.url} className="text-xl font-bold mb-2">
      {article.title}
    </a>
    <p className="text-gray-600 mb-4">{article.description}</p>
    <p className="text-sm text-gray-500 italic">{`Published on ${new Date(
      article.publishedAt
    ).toLocaleString()} by ${article.author} @ ${article.source.name}`}</p>
  </div>
);

const News = () => {
  const [filteredNews, setFilteredNews] = useState(allNews);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterNews = (sentiment) => {
    if (sentiment === "All") {
      setFilteredNews(allNews);
    } else {
      const filtered = allNews.filter(
        (article) => article.Sentiment === sentiment
      );
      setFilteredNews(filtered);
    }
    setSelectedFilter(sentiment);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex space-x-4 mb-8">
        <button
          className={`btn ${
            selectedFilter === "All" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => filterNews("All")}
        >
          All
        </button>
        <button
          className={`btn ${
            selectedFilter === "Controversial" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => filterNews("Controversial")}
        >
          Controversial
        </button>
        <button
          className={`btn ${
            selectedFilter === "Booming" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => filterNews("Booming")}
        >
          Booming
        </button>
      </div>

      {filteredNews.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default News;
