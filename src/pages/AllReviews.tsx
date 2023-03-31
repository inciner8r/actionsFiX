import React, { useState, useEffect } from 'react';
import SearchBar from '../Components/SearchBar';
import ReviewContainer from '../Components/ReviewContainer';
import { fetchMetadataURIAll, fetchMetadataURIBySiteURL } from '../modules/fetch_metadataURI_from_graphql';
import { fetchMetadataFromIPFS } from '../modules/fetch_metadata_from_ipfs';
import { ReviewCreated } from '../graphql/types';
import Loader from '../Components/Loader';

const AllReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewCreated[]>([]);
  const [metaDataArray, setMetaDataArray] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewResults = await fetchMetadataURIAll();
      if (reviewResults) {
        setReviews(reviewResults);
      }
    };

    setLoading(true);
    fetchReviews().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const fetchMetaData = async () => {
      const metaDataPromises = reviews.map(async (review) => {
        const ipfsUrl = `https://ipfs.io/ipfs/${review.metadataURI.split('ipfs://')[1]}`;
        const metaData = await fetchMetadataFromIPFS(ipfsUrl);
        return metaData;
      });

      const metaDataResults = await Promise.all(metaDataPromises);
      setMetaDataArray(metaDataResults);
    };

    if (reviews.length > 0) {
      setLoading(true);
      fetchMetaData().finally(() => setLoading(false));
    }
  }, [reviews]);

  const handleSearch = async (siteURL: string) => {
    const reviewResults = await fetchMetadataURIBySiteURL(siteURL);
    if (reviewResults) {
      setReviews(reviewResults);
      const metaDataPromises = reviewResults.map(async (review) => {
        const ipfsUrl = `https://ipfs.io/ipfs/${review.metadataURI.split('ipfs://')[1]}`;
        const metaData = await fetchMetadataFromIPFS(ipfsUrl);
        return metaData;
      });
      const metaDataResults = await Promise.all(metaDataPromises);
      setMetaDataArray(metaDataResults);
    } else {
      setMetaDataArray([]);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading ? <Loader /> : <ReviewContainer metaDataArray={metaDataArray} />}
    </div>
  );
};

export default AllReviews;
