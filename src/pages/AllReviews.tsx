import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ReviewContainer from '../Components/ReviewContainer';
import { fetchMetadataURIAll, fetchMetadataURIBySiteURL, fetchMetadataURIBySiteSafety } from '../modules/fetch_metadataURI_from_graphql';
import { fetchMetadataFromIPFS } from '../modules/fetch_metadata_from_ipfs';
import { ReviewCreated } from '../graphql/types';
import Loader from '../Components/Loader';
import FilterButton from '../Components/reviewFilters';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';


const AllReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewCreated[]>([]);
  const [metaDataArray, setMetaDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const connectWallet = async () => {
    navigate('/my-reviews');
  };
  
  useEffect(() => {
    setLoading(true);
    const fetchReviews = async () => {
      const reviewResults = await fetchMetadataURIAll();
      if (reviewResults) {
        setReviews(reviewResults);
      }
    };

    fetchReviews().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const fetchMetaData = async () => {
      const metaDataPromises = reviews.map(async (review) => {
        if (review.metadataURI && review.metadataURI.startsWith('ipfs://')) {
          const ipfsUrl = `https://ipfs.io/ipfs/${review.metadataURI.split('ipfs://')[1]}`;
          const metaData = await fetchMetadataFromIPFS(ipfsUrl, review.id);
          return metaData;
        }
        return null;
      });
  
      const metaDataResults = (await Promise.all(metaDataPromises)).filter((result) => result !== null);
      setMetaDataArray(metaDataResults);
    };
  
    if (reviews.length > 0) {
      setLoading(true);
      fetchMetaData().finally(() => setLoading(false));
    }
  }, [reviews]);  

  const handleFilterChange = async (siteSafety: string) => {
    let reviewResults;
  
    if (siteSafety === "all") {
      reviewResults = await fetchMetadataURIAll();
    } else {
      reviewResults = await fetchMetadataURIBySiteSafety(siteSafety);
    }
  
    if (reviewResults) {
      setReviews(reviewResults);
      const metaDataPromises = reviewResults.map(async (review) => {
        if (review.metadataURI && review.metadataURI.startsWith('ipfs://')) {
          const ipfsUrl = `https://ipfs.io/ipfs/${review.metadataURI.split('ipfs://')[1]}`;
          const metaData = await fetchMetadataFromIPFS(ipfsUrl, review.id);
          return metaData;
        }
        return null;
      });
      const metaDataResults = (await Promise.all(metaDataPromises)).filter((result) => result !== null);
      setMetaDataArray(metaDataResults);
    } else {
      setMetaDataArray([]);
    }
  };  
  
  const handleSearch = async (siteURL: string) => {
    const reviewResults = await fetchMetadataURIBySiteURL(siteURL);
    if (reviewResults) {
      setReviews(reviewResults);
      const metaDataPromises = reviewResults.map(async (review) => {
        if (review.metadataURI && review.metadataURI.startsWith('ipfs://')) {
          const ipfsUrl = `https://ipfs.io/ipfs/${review.metadataURI.split('ipfs://')[1]}`;
          const metaData = await fetchMetadataFromIPFS(ipfsUrl, review.id);
          return metaData;
        }
        return null;
      });
      const metaDataResults = (await Promise.all(metaDataPromises)).filter((result) => result !== null);
      setMetaDataArray(metaDataResults);
    } else {
      setMetaDataArray([]);
    }
  };

  const style = {
    color: '#11D9C5',
};

const style2 = {
  backgroundColor: '#11D9C5',
};

const background = {
  backgroundColor: '#141a31'
}
  

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-10"
        style={background}
      >
      <section className="pt-12">
            <div className="py-20 mx-auto max-w-7xl">
                <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                    <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
                    Discover <span style={style}>Verified Reviews</span><br/>Empower Your Online Security<br/>
                    </h1>
                    <p className="px-0 mb-8 text-lg text-gray-300 md:text-xl lg:px-24">
                    Your go-to for reinforcing online security
                    </p>
                    <div className='mb-4 space-x-0 md:space-x-2 md:mb-8 inline-flex items-center justify-center w-full font-bold px-6 py-3 mb-2 text-lg text-black rounded-2xl sm:w-auto sm:mb-0 focus:ring focus:ring-green-300 focus:ring-opacity-80' style={style2}>
                      <button onClick={connectWallet}>Submit Reviews</button>
                    </div>
                </div>
            </div>
      </section>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16"
      >
        <SearchBar onSearch={handleSearch} />
        <FilterButton onFilterChange={handleFilterChange} />
        {loading ? <Loader /> : <ReviewContainer metaDataArray={metaDataArray} MyReviews={false}/>}
      </motion.div>
    </motion.div>
  );  
};

export default AllReviews;