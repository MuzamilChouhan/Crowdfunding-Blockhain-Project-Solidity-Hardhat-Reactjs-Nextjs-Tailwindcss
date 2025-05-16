// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract CrowdFunding {
    struct Campaign {
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public numberOfCampaigns = 0;

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _target,
        uint256 _deadline
    ) public returns (uint256) {
        require(_deadline > block.timestamp, "Deadline must be in the future");

        Campaign storage newCampaign = campaigns[numberOfCampaigns];
        newCampaign.owner = _owner;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.target = _target;
        newCampaign.deadline = _deadline;
        newCampaign.amountCollected = 0;

        numberOfCampaigns++;
        return numberOfCampaigns - 1;
    }

    function donateToCampaign(uint256 _id) public payable {
        Campaign storage campaign = campaigns[_id];

        require(block.timestamp < campaign.deadline, "Campaign ended");
        require(msg.value > 0, "Must send ETH");

        uint256 remaining = campaign.target - campaign.amountCollected;

        require(remaining > 0, "Target already met");

        uint256 acceptedAmount = msg.value;
        uint256 refundAmount = 0;

        if (msg.value > remaining) {
            acceptedAmount = remaining;
            refundAmount = msg.value - remaining;
        }

        // Send ETH to campaign owner
        (bool sent, ) = payable(campaign.owner).call{value: acceptedAmount}("");
        require(sent, "ETH send to owner failed");

        // Record donation
        campaign.donators.push(msg.sender);
        campaign.donations.push(acceptedAmount);
        campaign.amountCollected += acceptedAmount;

        // Refund extra if sent
        if (refundAmount > 0) {
            (bool refunded, ) = payable(msg.sender).call{value: refundAmount}("");
            require(refunded, "Refund failed");
        }
    }

    function getDonators(uint256 _id) public view returns (address[] memory, uint256[] memory) {
        return (campaigns[_id].donators, campaigns[_id].donations);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint256 i = 0; i < numberOfCampaigns; i++) {
            allCampaigns[i] = campaigns[i];
        }

        return allCampaigns;
    }
}
