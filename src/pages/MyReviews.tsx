import { checkWalletAuth } from '../modules/connect_to_metamask';
import { checkJwtToken } from '../modules/authentication';
import { useAccount, useSigner } from 'wagmi';
import { setJwtToken, setWalletData } from '../actions/walletActions';
import store from '../store';
import Loader from '../Components/Loader';
import WalletNotFound from '../Components/MyReviews/walletNotFound';
import Main from '../Components/MyReviews/main';
import { useEffect, useCallback } from 'react';
export interface FlowIdResponse {
  eula: string;
  flowId: string;
}

export interface WalletData {
  walletAddress: string | undefined;
}

const MyReviews = () => {


  // MAIN LOGIC:
  const { address, isConnecting, isDisconnected } = useAccount()
  const { data: signer } = useSigner()

  // Function to generate {eula} and {flowID} using {walletAddress} from the gateway api.
  const askFlowId = async (address:string | undefined): Promise<FlowIdResponse> => {
    const walletData = address
    if (!walletData) {
        throw new Error('User not connected to MetaMask');
    }
    const walletAddress = walletData;
    //const gateway = process.env.REACT_APP_DEV_GATEWAY_URL;
    const gateway = process.env.REACT_APP_GATEWAY_URL;
    const response = await fetch(`${gateway}/flowid?walletAddress=${walletAddress}`);
    const json = await response.json();
    if (response.status !== 200) {
        throw new Error(json.message);
    }
    const data = {
        eula: json.payload.eula,
        flowId: json.payload.flowId,
    };
    return data;
  };

  // Function to get {tokenID} from the gateway api.
  const sendSignature = async (address:string | undefined) => {
    try {
        // Get eula and FlowID from the gateway api.
        const { eula, flowId } = await askFlowId(address);
        // Generate message to be signed.
        const message = `${eula}${flowId}`;
        const Signer = signer;
        // Check if Signer is not null or undefined
        if (!Signer) {
          return false;
        }
    
        const signature = await Signer.signMessage(message);
        const requestOptions: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            flowId,
            signature,
        }),
        };
        //const gateway = process.env.REACT_APP_DEV_GATEWAY_URL;
        const gateway = process.env.REACT_APP_GATEWAY_URL;
        const response = await fetch(`${gateway}/authenticate`, requestOptions);
        const tokenID_json = await response.json()
        const token = tokenID_json.payload.token;
        store.dispatch(setJwtToken(token));
        return token;
    } catch (error) {
        return error;
    }
    
  };

  const sendSignatureCallback = useCallback(sendSignature, [signer]);

  useEffect(() => {
    if (checkWalletAuth() && !checkJwtToken()) {
      sendSignatureCallback(address);
    }
  }, [address, signer, sendSignatureCallback]);

  if (isConnecting) return <div><Loader/></div>

  if (isDisconnected) return <div><WalletNotFound/></div>

  const walletData = address;
  store.dispatch(setWalletData(walletData));

  if (!checkWalletAuth() && !checkJwtToken()) {
    return (
      <div>
        <WalletNotFound />
      </div>
    )
  }  

  return (
    <div>
      <Main />
    </div>
  )
}

export default MyReviews
