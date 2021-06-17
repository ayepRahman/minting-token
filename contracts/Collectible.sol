// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// write test cases to test smart contract.

contract Collectible is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Collectible", "COL") {
    }


    function createCollectible(string memory tokenURI)
        public
        returns (uint256)
    {
        // a function to generate unique everytime this function os invoke.
        _tokenIds.increment();
        // getting the id we just created.
        uint256 newItemId = _tokenIds.current();
        // minting user ethereuam address and include the id we just created
        
        _mint(msg.sender, newItemId);
        // setting tokenURI with user new token id.
        _setTokenURI(newItemId, tokenURI);
        // return the id.
        return newItemId;
    }

    function getCollectibles()
        public
        returns (uint256)
    {
        // using _tokenIds to map and return tokenUri's
       
        // return ;
    }
    
    function getOneCollectibleUriByTokenId(uint256 tokenId) 
        public view
        returns (string memory) 
    {
        string memory tokenUri = tokenURI(tokenId);
        return tokenUri;
    }

}