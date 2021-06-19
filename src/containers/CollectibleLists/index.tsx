import React from "react";
import CollectibleCard from "components/CollectibleCard";
import { mockCollectible } from "mocks/collectible";
import { useAppSelector } from "redux/hooks";
import { selectContract } from "redux/contract";
import { img1, img2, img3, img4, img5, img6, img7, img8 } from "resources/img";

const CollectibleLists = () => {
  const contract = useAppSelector(selectContract);

  const loadCollectibles = React.useCallback(async () => {
    try {
      if (!contract) return;

      const response = await contract.getOneCollectibleUriByTokenId(1);

      await response;

      console.log("response", JSON.stringify(response));
    } catch (error) {
      console.log("error", error);
    }
  }, [contract]);

  React.useEffect(() => {
    if (contract) {
      loadCollectibles();
    }
  }, [contract, loadCollectibles]);

  return (
    <>
      <CollectibleCard
        src={mockCollectible.imgFile}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img1}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img2}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img3}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img4}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img5}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img6}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img7}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
      <CollectibleCard
        src={img8}
        name={mockCollectible.name}
        eth={mockCollectible.price}
      />
    </>
  );
};

export default CollectibleLists;
