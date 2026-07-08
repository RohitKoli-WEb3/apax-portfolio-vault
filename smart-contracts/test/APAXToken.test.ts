import { expect } from "chai";
import { ethers } from "ethers";
import { network } from "hardhat";


describe("APAXToken", function () {

    async function deployAPAXTokenFixture() {

        const { ethers } = await network.connect();

        const [
            owner,
            holder1,
            holder2,
            nonOwner
        ] = await ethers.getSigners();


        const APAXToken =
            await ethers.getContractFactory("APAXToken");


        const token =
            await APAXToken.deploy(owner.address);


        await token.waitForDeployment();


        return {
            token,
            owner,
            holder1,
            holder2,
            nonOwner,
            ethers
        };
    }



    describe("Deployment", function () {


        it("Should assign initial supply to owner", async function () {


            const {
                token,
                owner,
                ethers
            } = await deployAPAXTokenFixture();


            const balance =
                await token.balanceOf(owner.address);


            expect(balance).to.equal(
                ethers.parseUnits("1000000", 18)
            );

        });



        it("Should approve owner as initial holder", async function () {


            const {
                token,
                owner
            } = await deployAPAXTokenFixture();


            const approved =
                await token.isApproved(owner.address);


            expect(approved).to.equal(true);

        });

    });



    describe("Holder Management", function () {


        it("Should allow owner to approve holder", async function () {


            const {
                token,
                holder1
            } = await deployAPAXTokenFixture();


            await token.approveHolder(
                holder1.address
            );


            expect(
                await token.isApproved(holder1.address)
            ).to.equal(true);

        });



        it("Should allow owner to revoke holder", async function () {


            const {
                token,
                holder1
            } = await deployAPAXTokenFixture();


            await token.approveHolder(
                holder1.address
            );


            await token.revokeHolder(
                holder1.address
            );


            expect(
                await token.isApproved(holder1.address)
            ).to.equal(false);

        });



        it("Should reject approval from non-owner", async function () {


            const {
                token,
                holder1,
                nonOwner
            } = await deployAPAXTokenFixture();



            await expect(
                token
                    .connect(nonOwner)
                    .approveHolder(holder1.address)
            )
                .to.be.revert(ethers);

        });

    });



    describe("Token Transfer Rules", function () {



        it("Should allow transfer to approved holder", async function () {


            const {
                token,
                holder1,
                ethers
            } = await deployAPAXTokenFixture();


            await token.approveHolder(
                holder1.address
            );


            await token.transfer(
                holder1.address,
                ethers.parseUnits("100", 18)
            );


            const balance =
                await token.balanceOf(holder1.address);



            expect(balance).to.equal(
                ethers.parseUnits("100", 18)
            );

        });



        it("Should reject transfer to unapproved holder", async function () {


            const {
                token,
                holder1,
                ethers
            } = await deployAPAXTokenFixture();



            await expect(
                token.transfer(
                    holder1.address,
                    ethers.parseUnits("100", 18)
                )
            )
                .to.be.revertedWithCustomError(
                    token,
                    "HolderNotAllowed"
                );

        });


    });


});